
// cookies
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}

// array utils
Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};

// menu
function toggleVisibility(id)
{
    let element = document.getElementById(id);
    element.classList.toggle("show-in-mobile");
}

// tabs
function activate_tab(class_name)
{
    let tabs = document.getElementsByClassName('tab');
    for (let tab of tabs)
    {
        // activate tab
        if(tab.classList.contains(class_name))
            tab.style.display = "block";
        else
            tab.style.display = "none";

        // activate link
        let links = tab.parentElement.getElementsByClassName('tab-link');
        for (let link of links)
        {
            if(link.classList.contains(class_name))
                link.classList.add("active");
            else
                link.classList.remove("active");
        }
    }
}

function extract_tab_class(tab)
{
    let class_list = Array.prototype.slice.call(tab.classList);
    let filtered_class_list = class_list.diff(['docutils', 'container', 'tab', 'tabs']);
    if(filtered_class_list.length == 0)
        return 'no-name';
    else
        return filtered_class_list[0];
}

var tab_init_cache = {}
function init_tab_container(tab_container)
{
    // get tabs
    let tabs = tab_container.getElementsByClassName('tab');
    if(tabs.length == 0)
    {
        return
    }

    // create link container
    let link_container = document.createElement("div");
    let tab_type = extract_tab_class(tab_container);
    link_container.className = 'tab-links';
    for (let tab of tabs){
        let link = document.createElement("a");
        let tab_class = extract_tab_class(tab);
        link.appendChild(document.createTextNode(tab_class));
        link.classList.add('tab-link');
        link.classList.add(tab_class);
        link.href = 'javascript:;';
        link_container.appendChild(link);
        link.onclick = function() {
            activate_tab(tab_class);
            setCookie(tab_type, tab_class, 365);
        };
    }
    tab_container.insertBefore(link_container, tab_container.firstChild);

    // get initial value
    let cached_value = tab_init_cache[tab_type];
    if(cached_value)
    {
        activate_tab(cached_value);
    }
    else
    {
        let cookie_value = getCookie(tab_type)
        if(cookie_value)
        {
            activate_tab(cookie_value);
            tab_init_cache[tab_type] = cookie_value
        }
        else
        {
            let first_value = extract_tab_class(tabs[0]);
            activate_tab(first_value);
            tab_init_cache[tab_type] = first_value
        }
    }
}

document.addEventListener('DOMContentLoaded', function(event)
{
    let tab_containers = document.getElementsByClassName('tabs');
    for (let tab_container of tab_containers)
    {
        init_tab_container(tab_container);
    }
})

