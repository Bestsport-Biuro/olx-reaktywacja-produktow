document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const link = document.getElementById('link').value || 'https://www.olx.pl/purchase/activate/promote/?ad-id=931453689&bs=olx_pro_unpaid&delivery=true&selected-products=bundle_optimum&tr-id=tr.ee3e631f-ed06-4d6a-98e5-8128b532e5db&tr-visibility=true';
    const continueProducts = parseInt(document.getElementById('productCount').value, 10) || 0;
    const inputFile = document.getElementById('code').value ?? '';

    const regexLink = /(.*\D)(\d{9})(.*)/;
    const matchLink = regexLink.exec(link);

    const linkStart = matchLink[1];
    const linkEnd = matchLink[3];

    const regexId = /<a href="\/d\/adding\/edit\/(\d+)\//g;

    const ids = [];
    let match;
    while ((match = regexId.exec(inputFile)) !== null) {
        ids.push(match[1]);
    }

    const links = ids.slice(continueProducts).map((id, index) => {
        return `<a href="${linkStart}${id}${linkEnd}" target="_blank" class="link-item">${++index}) ${linkStart}${id}${linkEnd}</a>`;
    });

    document.querySelector('.form-box').style.display = 'none';
    document.querySelector('.container').style.textAlign = 'center';
    const res = document.getElementById('result');
    res.innerHTML = links.join('<br>');
    res.style.cssText = 'text-align: center;min-width: 50vw;margin: auto;padding: 50px;background: #ffffff;border: 10px solid #f2f2f2;margin-bottom: 60px;';
});
