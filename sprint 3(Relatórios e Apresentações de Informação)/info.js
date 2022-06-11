
// Interacao com javascript
if (!localStorage.getItem("data")) {
    let data = [
        {
            "nomeDoProduto": "MacBook Pro de 13 polegadas – Prateado",
            "fabricanteDoProduto": "Apple",
            "descricaoDoProduto": "Chip M1 da Apple com CPU de 8 núcleos, GPU de 8 núcleos e Neural Engine de 16 núcleos",
            "imagemDoProduto": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-silver-select-202011_GEO_BR?wid=640&hei=595&fmt=jpeg&qlt=95&.v=1632950237000",
            "linkDetalhes": "produto.html",
            "varegistas": [
                { "nome": "Americanas", "precoNovo": 12289, "precoAntigo": 16395, "link": "https://www.americanas.com.br/produto/3152844915?epar=bp_pl_00_go_inf_pmax_geral&opn=YSMESP&WT.srch=1&aid=626febb5a3a8ac0017f86491&sid=00776574000660&pid=3152844915&chave=vnzpla_626febb5a3a8ac0017f86491_00776574000660_3152844915&offerId=607f11230c070442669cfe69&gclid=Cj0KCQjw-pCVBhCFARIsAGMxhAc3cIBpuLo5bX8_cECazgFV8XBfMJ1iio46s7AZD8PnY6m1CoYzAO0aAt8XEALw_wcB&cor=CINZA&voltagem=BIVOLT" },
                { "nome": "Submarino", "precoNovo": 12289, "precoAntigo": 16395, "link": "https://www.submarino.com.br/produto/3152844915?epar=bp_pl_px_go_pmax_informatica_geral_1p&opn=XMLGOOGLE&WT.srch=1&aid=626febb5a3a8ac0017f86491&sid=00776574000660&pid=3152844915&chave=vnzpla_626febb5a3a8ac0017f86491_00776574000660_3152844915&offerId=607f11140fff249a32031b9a&gclid=Cj0KCQjw-pCVBhCFARIsAGMxhAdAE5pOd5C0_JDz_ffiF3ts3dGXUGqUKWyOnZ8onOrEJHmx0dkRbN0aAn3nEALw_wcB&cor=CINZA&voltagem=BIVOLT" },
                { "nome": "Mercado Livre", "precoNovo": 8891, "precoAntigo": 16395, "link": "https://www.mercadolivre.com.br/apple-macbook-pro-13-polegadas-2020-chip-m1-256-gb-de-ssd-8-gb-de-ram-cinza-espacial/p/MLB17828328?matt_tool=91909701&matt_word=&matt_source=google&matt_campaign_id=14303413598&matt_ad_group_id=129016979490&matt_match_type=&matt_network=g&matt_device=c&matt_creative=584295662765&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=456947131&matt_produc" },
                { "nome": "Casas Bahia", "precoNovo": 12599, "precoAntigo": 16395, "link": "https://www.casasbahia.com.br/macbook-pro-de-13-polegadas-cinza-espacial-com-256gb-e-m1-da-apple-1514245159/p/1514245159?utm_medium=Cpc&utm_source=GP_PLA&IdSku=1514245159&idLojista=34312&tipoLojista=3P&utm_campaign=3P_INFO_PMAX&gclid=Cj0KCQjw-pCVBhCFARIsAGMxhAcKQ5c2N9l1HmhDguARfEj98swkRbEsiyObqjE6zFjmkYoi7goOynkaAjOBEALw_wcB" }
            ]
        },
        {
            "nomeDoProduto": "Galaxy S22 5G Verde 128GB",
            "fabricanteDoProduto": "Samsung",
            "descricaoDoProduto": "A bateria que dura mais de 24 horas, mesmo em 5G. Mova suas obras de arte com um toque Com o Nightography você registra tudo mesmo depois do fim do dia",
            "imagemDoProduto": "https://samsungbr.vtexassets.com/arquivos/ids/331036-1200-auto?width=1200&height=auto&aspect=true",
            "linkDetalhes": "produto.html",
            "varegistas": [
                { "nome": "Americanas", "precoNovo": 5150, "precoAntigo": 5399, "link": "#" },
                { "nome": "Submarino", "precoNovo": 4890, "precoAntigo": 5399, "link": "#" },
                { "nome": "Mercado Livre", "precoNovo": 4950, "precoAntigo": 5399, "link": "#" },
                { "nome": "Pichau", "precoNovo": 5090, "precoAntigo": 5399, "link": "#" }
            ]
        },
        {
            "nomeDoProduto": "Geladeira Brastemp Frost Free Inverse 443 litros cor Inox com Turbo Ice - BRE57AK 110V",
            "fabricanteDoProduto": "Brastemp",
            "descricaoDoProduto": "A Geladeira Brastemp Frost Free Inverse 443 litros cor Inox tem refrigerador em cima e freezer embaixo, deixando os alimentos mais utilizados sempre à mão. Com o Turbo Ice, faça gelo mais rápido sempre que precisar. O modelo conta ainda com Twist Ice Advanced e Espaço Adapt.o",
            "imagemDoProduto": "https://m.media-amazon.com/images/I/41TzSmedi1L._AC_SX679_.jpg",
            "linkDetalhes": "produto.html",
            "varegistas": [
                { "nome": "Americanas", "precoNovo": 4300, "precoAntigo": 4594, "link": "#" },
                { "nome": "Submarino", "precoNovo": 4200, "precoAntigo": 4594, "link": "#" },
                { "nome": "Mercado Livre", "precoNovo": 4340, "precoAntigo": 4594, "link": "#" },
                { "nome": "Pichau", "precoNovo": 4500, "precoAntigo": 4594, "link": "#" }
            ]
        }
    ]
    localStorage.setItem("data", JSON.stringify(data))
}

var data = JSON.parse(localStorage.getItem("data"))
contruirPagina()

function contruirPagina() {
	var cardsID = document.getElementById("cards-produtos")
	data[0].varegistas.forEach((element, index, array) => {
		cardsID.innerHTML += `
		<div class="card card-body mt-3">
			<div
				class="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
				<div class="media-body">

					<img src="img/${element.nome}.png" class="logo_outros">

					<ul class="list-inline list-inline-dotted mb-0">
						<li class="list-inline-item">Loja: <a href="#" data-abc="true">${element.nome}</a></li>
						<li class="list-inline-item">Adicionar a <a href="#" data-abc="true">Lista de desejos</a></li>
					</ul>
				</div>

				<div class="mt-3 mt-lg-0 ml-lg-3 text-center">
					<h3 class="mb-0 font-weight-semibold">R$ ${Intl.NumberFormat('pt-BR').format(element.precoNovo)},00</h3>
					<label for="h3"><del>R$ ${Intl.NumberFormat('pt-BR').format(element.precoAntigo)},00</del></label>

					<div>
						<i class="fa fa-star"></i>
						<i class="fa fa-star"></i>
						<i class="fa fa-star"></i>
						<i class="fa fa-star"></i>
						<i class="fa fa-star"></i>

					</div>
					<a href="${element.link}"> 
						<button type="button" class="btn btn-warning mt-4 text-white">
						<i class="icon-cart-add mr-2"></i> Ir ao site</button>
					</a>
				</div>
			</div>
		</div>
		`
	});
}