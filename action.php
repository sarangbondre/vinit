

<?php
echo "Thanks for submiting the data<pre>";

$firstarray = array(1 => 'Site Visit', 2 => 'Dealer/sub-dealer Visit', 3 => 'Influencer Visit', 4 => 'Technical Meet', 5 => 'Lead Generated');
$_POST['first'] = $firstarray[$_POST['first']];
$_POST['datetime'] = date('d-m-Y H:i:s');
$file = fopen("vinitng.csv","a");
fputcsv($file,$_POST);
fclose($file);
?>