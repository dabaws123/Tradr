function email(){
    var nodemailer = require('nodemailer');
    var emailName = $("#email").val();
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: '',
        pass: ''
      }
    });
    
    var from,to,text;
    $("#send_email").click(function(){  
        to = $("#to").val();
        text = $("#content").val();
    });
    
    var mailOptions = {
      from: 'Trdr',
      to: '',
      subject: 'Trade Request',
      text: 'Something went wrong'
    };
    
    mailOptions.to = $("#to").val();
    mailOptions.text = $("#content").val();
    

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    $("#to").val("");
    $(".info-area").val("");
}

window.onload = function () { $("#money").hide(); $("#data").hide(); }

function showWindowI(){
    $("#info").show();
    $("#money").hide();
    $("#data").hide();
    $(".info-area").val("");
    $("#to").val("");
}

function showWindowM(){
    $("#money").show();
    $("#info").hide();
    $("#data").hide();
    $("#emailM").val("");
}

function showWindowD(){
    $("#data").show();
    $("#money").hide();
    $("#info").hide();
    $("#emailD").val("");
}

function clearEmail(){
    $("#email").val("");
}

function clearEmailM(){
    $("#emailM").val("");
}

function clearEmailD(){ 
    $("#emailD").val("");
}