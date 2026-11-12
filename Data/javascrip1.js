  <script type="text/javascript">

        function setDockingHeight() {

            var l, c, r, max;

            l = 0; c = 0, r = 0;



            if (LeftBar != null)

                l = LeftBar.offsetHeight;

            if (typeof (RightBar) != 'undefined')

                r = RightBar.offsetHeight;



            c = Content.offsetHeight;

            max = l;

            if (max < c) { max = c; };

            if (max < r) { max = r; };



            if (LeftBar != null)

                LeftBar.style.height = max + 'px';

            Content.style.height = max + 'px';

            if (typeof (RightBar) != 'undefined')

                RightBar.style.height = max + 'px';

        }

    </script>
    <script type="text/javascript">

//<![CDATA[

var theForm = document.forms['form1'];

if (!theForm) {

    theForm = document.form1;

}

function __doPostBack(eventTarget, eventArgument) {

    if (!theForm.onsubmit || (theForm.onsubmit() != false)) {

        theForm.__EVENTTARGET.value = eventTarget;

        theForm.__EVENTARGUMENT.value = eventArgument;

        theForm.submit();

    }

}

//]]>

</script>





<script src="./Data/WebResource.axd" type="text/javascript"></script>



<script type="text/javascript">var HostName='http://haiphong.gov.vn/';</script><script type="text/javascript">

var SubMenuObject=null;

function ShowHideMenu(ID){

  var tbl=document.getElementById(ID);

  if(tbl!=null)

  {

      if (SubMenuObject!=null)

      SubMenuObject.style.display="none"

      tbl.style.display="";

      SubMenuObject=tbl;

  }

}



function ShowPopup(ID){

 var obj=document.getElementById(ID);

     if(obj!=null){

     obj.style.left="";

     obj.style.display="";

     obj.style.left= (obj.offsetLeft-4);

     }

}



function HidePopup(ID){

 var obj=document.getElementById(ID);

     if(obj!=null)

     {

        obj.style.display="none";

     }

}



function ShowMenuContent(p1,p2,p3){

    if(p1!=""){

        if (p3=="0"){

        window.location.href="Content.aspx?MenuID=" + p1;

        }

        else

        {

         window.open("Content.aspx?MenuID=" + p1)

        }

    }

    else

    {   if (p3=="0"){

        window.location.href=p2;

        }

        else

        {

            window.open(p2)

        }

    }

}



function ShowContentDetail(ContentID, NewWindow){

    if (NewWindow=='0'){

    window.location.href="Detail.aspx?ContentID=" + ContentID ;

    }

    else

    {

        window.open("Detail.aspx?ContentID=" + ContentID);

    }

}

</script>

<script src="./Data/JScript.js" type="text/javascript"></script>

<script src="./Data/JScript(1).js" type="text/javascript"></script>

<script src="./Data/ScriptResource.axd" type="text/javascript"></script>

<script type="text/javascript">

//<![CDATA[



    function TreeView_PopulateNodeDoCallBack(context,param) {

        WebForm_DoCallback(context.data.treeViewID,param,TreeView_ProcessNodeData,context,TreeView_ProcessNodeData,false);

    }

var ZoneLeft_HSPControl_688_1_trvWeblinks_Data = null;//]]>

</script>
<script type="text/javascript">

//<![CDATA[

if (typeof(Sys) === 'undefined') throw new Error('ASP.NET Ajax client-side framework failed to load.');

//]]>

</script>



<script src="./Data/ScriptResource(3).axd" type="text/javascript"></script>

<script type="text/javascript">

//<![CDATA[

function WebForm_OnSubmit() {

if (typeof(ValidatorOnSubmit) == "function" && ValidatorOnSubmit() == false) return false;

return true;

}

//]]>

</script>
<script type="text/javascript">

//<![CDATA[

Sys.WebForms.PageRequestManager._initialize('ScriptManager1', 'form1', [], [], [], 90, '');

//]]>

</script>
