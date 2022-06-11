
$(Document).ready(function()
{
	"use strict";

	var menuActive = false;
	var header = $('.header');
	setHeader();
	initCustomDropdown();
	initPageMenu();

	function setHeader()
	{
	
		if(window.innerWidth > 991 && menuActive)
		{
			closeMenu();
		}
	}

	function initCustomDropdown()
	{
		if($('.custom_dropdown_placeholder').length && $('.custom_list').length)
		{
			var placeholder = $('.custom_dropdown_placeholder');
			var list = $('.custom_list');
		}

		placeholder.on('click', function (ev)
		{
			if(list.hasClass('active'))
			{
				list.removeClass('active');
			}
			else
			{
				list.addClass('active');
			}

			$(document).one('click', function closeForm(e)
			{
				if($(e.target).hasClass('clc'))
				{
					$(document).one('click', closeForm);
				}
				else
				{
					list.removeClass('active');
				}
			});

		});

		$('.custom_list a').on('click', function (ev)
		{
			ev.preventDefault();
			var index = $(this).parent().index();

			placeholder.text( $(this).text() ).css('opacity', '1');

			if(list.hasClass('active'))
			{
				list.removeClass('active');
			}
			else
			{
				list.addClass('active');
			}
		});


		$('select').on('change', function (e)
		{
			placeholder.text(this.value);

			$(this).animate({width: placeholder.width() + 'px' });
		});
	}

	/* 

	4. Init Page Menu

	*/

	function initPageMenu()
	{
		if($('.page_menu').length && $('.page_menu_content').length)
		{
			var menu = $('.page_menu');
			var menuContent = $('.page_menu_content');
			var menuTrigger = $('.menu_trigger');

			//Open / close page menu
			menuTrigger.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
				else
				{
					closeMenu();
				}
			});

			//Handle page menu
			if($('.page_menu_item').length)
			{
				var items = $('.page_menu_item');
				items.each(function()
				{
					var item = $(this);
					if(item.hasClass("has-children"))
					{
						item.on('click', function(evt)
						{
							evt.preventDefault();
							evt.stopPropagation();
							var subItem = item.find('> ul');
						    if(subItem.hasClass('active'))
						    {
						    	subItem.toggleClass('active');
								TweenMax.to(subItem, 0.3, {height:0});
						    }
						    else
						    {
						    	subItem.toggleClass('active');
						    	TweenMax.set(subItem, {height:"auto"});
								TweenMax.from(subItem, 0.3, {height:0});
						    }
						});
					}
				});
			}
		}
	}

	function openMenu()
	{
		var menu = $('.page_menu');
		var menuContent = $('.page_menu_content');
		TweenMax.set(menuContent, {height:"auto"});
		TweenMax.from(menuContent, 0.3, {height:0});
		menuActive = true;
	}

	function closeMenu()
	{
		var menu = $('.page_menu');
		var menuContent = $('.page_menu_content');
		TweenMax.to(menuContent, 0.3, {height:0});
		menuActive = false;
	}

	   
});


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
                { "nome": "Americanas", "precoNovo": 15400, "precoAntigo": 16395, "link": "#" },
                { "nome": "Submarino", "precoNovo": 13600, "precoAntigo": 16395, "link": "#" },
                { "nome": "Mercado Livre", "precoNovo": 15300, "precoAntigo": 16395, "link": "#" },
                { "nome": "Pichau", "precoNovo": 16100, "precoAntigo": 16395, "link": "#" }
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