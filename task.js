
const items = document.getElementById('items');
const img = document.querySelector('.loader');

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', (e) => {
    if (xhr.readyState === xhr.DONE) {
        const response = JSON.parse(xhr.responseText);
        // console.log(response['response']);
        for (const valute in response['response']['Valute']) {
            items.insertAdjacentHTML('beforeEnd', `
                <div class="item">
                    <div class="item__code">
                        ${response['response']['Valute'][valute]['CharCode']}
                    </div>
                    <div class="item__value">
                        ${response['response']['Valute'][valute]['Value']}
                    </div>
                    <div class="item__currency">
                        руб.
                    </div>
                </div>
            `
            )
        }
        img.classList.toggle('loader_active');
    }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();