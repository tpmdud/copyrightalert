copyrightalert
============

Welcome and thanks for using/tryout my plugin, i made this for a friend to make it harder to copy and past images from his site.
I hope its usefull for you, too!

##Basic installation (needed)
```html
<!-- Add this to your html head -->
<link href="YOURPATH/tpmcopyalert.css" rel="stylesheet" />
<script src='http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js' type='text/javascript'></script><!-- You only need Jquery running once per page. -->
<script src='YOURPATH/tpmcopyalert.js' type='text/javascript'></script>
```

##Basic script start (needed)
```html
<script type='text/javascript'>
$(function(){
	$('.tpmcopyalert').tpmcopyalert();
});
</script>
```

##Customisation -Instead of basic script start(recommendet)
```html
<!-- Add this to your html head -->
<script type='text/javascript'>
$(function(){
	$('.tpmcopyalert').tpmcopyalert({
        text : 'This media is copyrighted &copy 2014 by the site owner. All rights reserved.', //custom text goes here
        alertid: "tpmcopyalert", //custom alert id goes here (not really needed) 
    });
});
</script>
```
