<?php

 $mail['to'] = "sm@2geart.com"; // Кому

/* А здесь прописывается текст сообщения, \n - перенос строки */
	$mes = "Форма: ".$_POST['type']."<br>";
 	$mes .= "Имя: ".$_POST['name']."<br>";
 	$mes .= "Телефон или почта: ".$_POST['phone-email']."<br>";
 	$mes .= "Сообщение: ".$_POST['message']."<br>";
 	$mes .= "Сфера деятельности: ".$_POST['business']."<br>";
 	$mes .= "Система учета: ".$_POST['accounting-system']."<br>";

$mail['message'] = $mes;

	$HTTP_HOST = parse_url('http://'.$_SERVER["HTTP_HOST"]); 
	$HTTP_HOST = str_replace(array("http://","www."),"",$HTTP_HOST['host']);
	$mail['from'] ='<no-reply@'.$HTTP_HOST.'>'; // от кого
	
	$HTTP_HOST_URI = $HTTP_HOST . str_replace('/send.php',"",$_SERVER['REQUEST_URI']);
	$mail['subject'] = 'Заказ с сайта '.$HTTP_HOST_URI;
	
	
	$mail['charset'] = "utf-8";
	$mail['header'] = "MIME-Version: 1.0\n"
	."From: " . $mail['from'] . "\n"
	."X-Priority: 3\n"
	."X-Mailer: Mailer\n"
	."Content-Transfer-Encoding: 8bit\n"
	."Content-Type: text/html; charset=" . $mail['charset'] . "\n";
    
	include 'class.phpmailer.php';
	$test = new attach_mailer("", 'no-reply@'.$HTTP_HOST, $mail['to'], "", "", $mail['subject'], $mail['message']);
	
	$new_dir = "images/files/".date('Y_m_d_H_i_s')."/";
	@mkdir($new_dir);
	
	if (!empty($_FILES)) {
		$size=0;
	//echo '<pre>';	print_r($_FILES); echo '</pre>';
		foreach ($_FILES['file']['name'] as $key => $file){
		 	$size+=(int)$_FILES['file']['size'][$key];
		 	copy($_FILES['file']['tmp_name'][$key], $new_dir.$file);
		 //	echo 'key-'.$key.'<br>';
		 //	echo 'file-'.$file.'<br>';
		 //	echo 'tmp_name-'.$_FILES['file']['tmp_name'][$key].'<br>';
		 //	echo 'name-'.$_FILES['file']['name'][$key].'<br>';
			if ($size<20000000) $test->create_attachment_part( $new_dir.$file,$file);
		}
	}
	$test->process_mail();    
    
    

//$r = mail ($mail['to'], $mail['subject'], $mail['message'], $mail['header']);
echo '<pre>';
print_r($_POST);
?>
