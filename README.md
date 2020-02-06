# 📚🖼🗺🎲 

**library-of-randomness** (_L-O-R_) is a research tool. Use it to discover something new.
It will reward you with a random item in the extensive online archives of the
Library of Congress, Washington, DC, USA. Pairs particularly well with
[Are.na](http://are.na/).

**Installation:** drag the box below to your bookmarks toolbar. Maybe rename the
bookmark to something you prefer.

**Usage:** click the bookmark and wait to be redirected.

---

<div id="bk">
<a href="javascript:void%20function(){function%20a(a){return%20Math.floor(Math.random()*a)}const%20b=%22https://www.loc.gov/search/%3Fq=*%26fo=json%22+%22%26fa=online-format:image%22;fetch(b).then(a=%3Ea.json()).then(c=%3Efetch(b+%22%26sp=%22+a(c.pagination.total/100))).then(a=%3Ea.json()).then(b=%3Eb.results[a(b.pagination.perpage)].aka).then(a=%3E{for(i%20of%20a)i.includes(%22/item/%22)%26%26window.location.replace(i)})}();">L-O-R</a>
</div>

---

**Note:** by default, _L-O-R_ limits the range of possible results to images. If
you would like to visit results of any type, change the setting `VISUAL` to
`false`, and recompile the bookmarklet.

The minified bookmarklet code has been compiled with [Bookmarkleter](https://chriszarate.github.io/bookmarkleter/).
