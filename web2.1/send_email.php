<?php
header("Content-Type: text/html; charset=UTF-8");
//이메일 validation        
if(isset($_POST['email'])) {
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to ="amabileys@naver.com";	
	  $email_tow="djain@djain.co.kr";
    $email_subject = "웹사이트에 문의사항이 등록되었습니다.";
    function died($error) {
        // your error code can go here
        echo "<script> 
            alert('".$error."');
            window.history.back();
            </script>";
        die();
    }
    // validation expected data exists
    if(!isset($_POST['first_name']) ||
       !isset($_POST['email'])) {
       died('죄송하지만, 다음과 같은 에러가 발생하였습니다!');       
    }
    $first_name = $_POST['first_name']; 
    $email_from = $_POST['email']; 
    $telephone = $_POST['telephone']; 
    $comments = $_POST['comments']; 
 
    $error_message = "";
 
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= '이메일 주소 입력을 안하셨거나, 입력하신 형식이 올바르지 않습니다!\n';
  }
    $string_exp = "/([\xEA-\xED][\x80-\xBF]{2}|[a-zA-Z0-9])+/";
  if(!preg_match($string_exp,$first_name)) {
    $error_message .= '이름이나 회사명을 입력하시지 않으셨거나, 입력하신 형식이 올바르지 않습니다!\n';
  }
  if($_POST['telephone'] != ''){
      $telephone_exp = "/^[0-9]{1,}/";
        if(!preg_match($string_exp,$telephone)) {
            $error_message .= '입력하신 전화번호 형식이 올바르지 않습니다!\n';
  }}
  if($_POST['comments'] != ''){
      if(!preg_match($string_exp,$comments)) {
        $error_message .= '문의사항에 입력하신 형식이 올바르지 않습니다!\n';
  }}

  if(strlen($error_message) > 0) {
    died($error_message);
  }
    $email_message = '<html>
      <meta charset="utf-8">
      <head><title>웹사이트에 문의사항이 등록되었습니다.</title></head>
      <body>';

      function clean_string($string) {
        $bad = array("content-type","bcc:","to:","cc:","href");
        return str_replace($bad,"",$string);
      }
      $email_message .= '이름: '.clean_string($first_name).'<br>';
      $email_message .= '이메일: '.clean_string($email_from).'<br>';
      $email_message .= '연락처: '.clean_string($telephone).'<br>';
      $email_message .= '문의사항: '.clean_string($comments).'<br><br></body></html>';

      //HTML 메일을 보내기 위한 Content-type 설정
      $headers = "MIME-Version: 1.0" . "\r\n";
      $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

  
      // create email headers
      $headers .= 'From: '.$email_tow."\r\n".
      'Reply-To: '.$email_to."\r\n" .
      'X-Mailer: PHP/' . phpversion();
      //@mail($email_to, $email_subject, $email_message, $headers);
      @$agree = $_POST['agree'];
      if($agree == 'agree'){
      if(@mail($email_to, $email_subject, $email_message, $headers)){
              echo '<script>
                  alert(\''.$email_to.'로 이메일이 전송되었습니다!\');
                  </script>';
              echo("<script>location.replace('index.html');</script>"); 
          /*header("refresh:1, url=onlineqa.php");*/
              exit();
          };
      }else{
          echo '<script>
                  alert(\'동의란에 동의해 주세요!\');
                  </script>';
          $_POST['first_name'] = $first_name; 
          $_POST['email'] = $email_from; 
          $_POST['telephone'] = $telephone; 
          $_POST['comments'] = $comments; 
          echo '<script> window.history.back();</script>';
      }
    }
?>