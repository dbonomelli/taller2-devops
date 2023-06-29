package cl.profeseba.tiendatransbank.controllers;

import cl.profeseba.tiendatransbank.entities.RespuestaTransbank;
import cl.profeseba.tiendatransbank.entities.Venta;
import cl.transbank.model.MallTransactionCreateDetails;
import cl.transbank.webpay.exception.TransactionCommitException;
import cl.transbank.webpay.exception.TransactionCreateException;
import cl.transbank.webpay.webpayplus.WebpayPlus;
import cl.transbank.webpay.webpayplus.model.*;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.Random;

@RestController
@CrossOrigin(origins="*")
public class WebPayPlusMallController{
  
    @RequestMapping(value = "/webpay/create", method = RequestMethod.POST)
    public RespuestaTransbank webpayplusMallCreate(@RequestBody Venta venta) {

        System.out.println("Webpay Plus Mall MallTransaction.create");
        String buyOrder = String.valueOf(new Random().nextInt(Integer.MAX_VALUE));
        String sessionId = String.valueOf(new Random().nextInt(Integer.MAX_VALUE));
        double amount = venta.getTotal();
        
        String returnUrl = "http://localhost:8080/webpay/result";

        String mallOneCommerceCode = "597055555536";
        final MallTransactionCreateDetails mallDetails = MallTransactionCreateDetails.build()
                .add(amount, mallOneCommerceCode, buyOrder);



        try {
            final WebpayPlusMallTransactionCreateResponse response = WebpayPlus.MallTransaction.create(
                    buyOrder, sessionId, returnUrl, mallDetails);

            return new RespuestaTransbank(response.getUrl(), response.getToken());
           
        } catch (TransactionCreateException | IOException e) {
           
            return null;
        }

        
    }

    @RequestMapping(value = {"/webpay/result"}, method = RequestMethod.POST)
    public Venta result(@RequestParam("token_ws") String tokenWs, HttpServletRequest request) {
       
    	 Venta venta = new Venta();
        try {
            final WebpayPlusMallTransactionCommitResponse response = WebpayPlus.MallTransaction.commit(tokenWs);

            double amount = 0;
            for (WebpayPlusMallTransactionCommitResponse.Detail detail : response.getDetails()) {
                amount += detail.getAmount();
            }
      
            venta.setTotal((int)amount);
            venta.setEstado("ok");
         } catch (TransactionCommitException | IOException e) {
            venta.setEstado("nok");
            
        }
        return venta;

    }


}
