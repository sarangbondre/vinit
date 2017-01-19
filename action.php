header('Content-Type: application/excel');
header('Content-Disposition: attachment; filename="sample.csv"');

<?php
$firstarray = array(1 => 'Site Visit', 2 => 'Dealer/sub-dealer Visit', 3 => 'Influencer Visit', 4 => 'Technical Meet', 5 => 'Lead Generated');
echo "Thanks for submiting the data<pre>";
$file = fopen("vinitng.csv","a");
$_POST['first'] = $firstarray[$_POST['first']];
echo '<pre>';print_r($_POST);
$data = implode(",",$_POST);
echo $data;//exit;
fputcsv($file,$_POST);
fclose($file);
// print_r($_POST);
?>