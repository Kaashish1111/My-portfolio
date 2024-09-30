var typed=new Typed(".typing-text",{
    strings:["Frontend Developer","Freelancer","Full Stack Developer","Programmer"],
    typeSpeed:160,
    backSpeed:160,
    loop:true,
    loopCount: Infinity
})

Shery.makeMagnet(".links a",{});
Shery.makeMagnet("#nav h3",{});

Shery.imageEffect("#left-div img", {
    style: 6,
    // debug: true,
    gooey: true,
  });


  function opentab(tabName) {
    // Hide all tab contents
    var tabContents = document.getElementsByClassName("tab-contents");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active-tab");
    }

    // Show the selected tab content
    var selectedTab = document.getElementById(tabName);
    selectedTab.classList.add("active-tab");

    // Remove active class from all tab links
    var tabLinks = document.getElementsByClassName("tab-links");
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active-link");
    }

    // Add active class to the selected tab link
    var selectedLink = document.querySelector(`.tab-links[onclick="opentab('${tabName}')"]`);
    selectedLink.classList.add("active-link");
}