---
layout: default
title: Press
permalink: /press/
---
{% for post in site.posts %}
  <a href="{{site.baseurl}}{{post.url}}"><h3>{{post.title}}</h3></a>
  <p class="date">{{post.date | date_to_long_string }}</p>
  <a href="{{site.baseurl}}{{post.url}}"><img src="{{site.baseurl}}{{post.gallery[0].image}}" /></a>
  <br />
{% endfor %}


### Ten Magazine  
![Ten Magazine]({{site.baseurl}}/assets/img/ten_mag.jpg)
<br>
<br>

### Vanity Fair  
![Vanity Fair]({{site.baseurl}}/assets/img/vanity_fair_2.jpg)
<br>
<br>

### Vanity Fair  
![Vanity Fair]({{site.baseurl}}/assets/img/vanity_fair.jpg)
<br>
<br>

### C Magazine  
![C Magazine]({{site.baseurl}}/assets/img/c_mag.jpg)
<br>
<br>

### Net-A-Porter  
![Net-a-Porter]({{site.baseurl}}/assets/img/greybull237.jpeg)

