const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			peoples: [],
			detalle: [],
			planetCard: [],
			peopleCard: [],
			inf: [],
			imgP: [
				"https://img3.looper.com/img/gallery/the-history-of-tatooine-fully-explained/intro-1598632525.jpg",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette3.wikia.nocookie.net%2Fstarwars%2Fimages%2F8%2F8f%2FAlderaan_TFUcampaign2.jpg%2Frevision%2Flatest%3Fcb%3D20130425100703&f=1&nofb=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fes.starwars%2Fimages%2F7%2F71%2FYavin_Exterior_SWCT.png%2Frevision%2Flatest%3Fcb%3D20171019194801&f=1&nofb=1",
				"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fovermental.com%2Fwp-content%2Fuploads%2F2015%2F06%2FHoth02_lg.jpg&f=1&nofb=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.RSF3Ze6o-tyYB6pIoM8VpQHaEK%26pid%3DApi&f=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdata1.origin.com%2Fcontent%2Fdam%2Foriginx%2Fweb%2Fapp%2Fgames%2Fbastion%2FScreenshots%2FSWBF_dlc_screenhi_930x524_en_US_bespin_cloud2_v1.jpg&f=1&nofb=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.contentapi.ea.com%2Fcontent%2Flegacy%2Fstarwars-ea-com%2Fen_GB%2Fstarwars%2Fbattlefront%2Fnews-articles%2Fthe-star-wars-battlefront-planets--creating-endor%2F_jcr_content%2Fbody%2Fimage_2%2Frenditions%2Frendition1.img.jpg&f=1&nofb=1",
				"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg1.wikia.nocookie.net%2F__cb20131001173612%2Flucasfilm%2Fimages%2F5%2F50%2FNaboo.jpg&f=1&nofb=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.cbrimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2017%2F02%2FStar-Wars-Coruscant.jpg&f=1&nofb=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsteamuserimages-a.akamaihd.net%2Fugc%2F264976194634621504%2F6DF422B268A1F230AF7E163EFD08A6E5E73A0C56%2F&f=1&nofb=1"
			],
			img: [
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2F9%2F9b%2FLuke_Skywalker.png&f=1&nofb=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.nIit7LTOy8Vo_41ETzKmTgHaJQ%26pid%3DApi&f=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.XHmOOLBf_WcjvG6p4A1ehAHaHa%26pid%3DApi&f=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.t7k_5nz0mvgM-pR02OL-KwHaD4%26pid%3DApi&f=1",
				"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsw7x7.com%2Fwp-content%2Fuploads%2F2014%2F08%2FLeia_organa.jpg&f=1&nofb=1",
				"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi1.wp.com%2Fwww.coffeewithkenobi.com%2Fwp-content%2Fuploads%2F2014%2F09%2FOld-Owen-Lars.jpg&f=1&nofb=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fes.starwars%2Fimages%2Fc%2Fcc%2FBeruCardTrader.png%2Frevision%2Flatest%3Fcb%3D20171231024525&f=1&nofb=1",
				"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcontent.bandzoogle.com%2Fusers%2Fdmitrimathenycom%2Fimages%2Fcontent%2FR5-D4-300.jpg&f=1&nofb=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.krhGnS5MAHaFdl0AQyHkcAHaEK%26pid%3DApi&f=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Ftotal-movies%2Fimages%2Ff%2Fff%2FObi-Wan_Kenobi.jpg%2Frevision%2Flatest%3Fcb%3D20151105013428&f=1&nofb=1"
			],
			favoritos: [],
			people1: []
		},
		actions: {
			// Use getActions to call a function within a fuction

			getPlanets: async () => {
				const store = getStore();
				fetch("https://swapi.dev/api/planets/")
					.then(response => response.json())
					.then(data => {
						setStore({ planets: data.results });
					})
					.catch(error => console.log("error", error));
			},
			getPeoples: async () => {
				const store = getStore();
				fetch("https://swapi.dev/api/people/")
					.then(response => response.json())
					.then(data => {
						setStore({ peoples: data.results });
						//	getInfPeoples1(data.results.uid);
					})

					.catch(error => console.log("error", error));
			},

			getInfPeoples: async id => {
				const store = getStore();

				fetch("https://www.swapi.tech/api/people/" + id)
					.then(response => response.json())
					.then(data => {
						//	setStore({ detalle: data.result });
						setStore({ detalle: data.result.properties });
					})
					.catch(result => console.log("error", result));

				console.log(store.detalle);
			},

			getInfPlanets: id => {
				const store = getStore();
				console.log(id);
				fetch("www.swapi.tech/api/planets/" + id)
					.then(response => response.json())
					.then(result => {
						// setStore({ detalle: result });
						setStore({ detalle: data.result.properties });
						//setStore({ favoritos: data.result.properties });
					})
					.catch(error => console.log("error", error));
			},

			Favorite: (id, name, url) => {
				const store = getStore();
				//forma para agregar si esta vacido el array
				if (store.favoritos.length <= 0) {
					setStore({ favoritos: [{ id: id, name: name, url: url }] });

					//forma para agregar si tiene valor el array
				} else {
					setStore({ favoritos: [...store.favoritos, { id: id, name: name, url: url }] });
				}
				//console.log(store.favoritos);
			},
			Delete: i => {
				//get the store
				const store = getStore();
				//elimina el valor de acuerdo al index que se le envie
				store.favoritos.splice(i, 1);
				//sobre escribe el nuevo valor
				setStore({ favoritos: store.favoritos });
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			borrar: (index, people1) => {
				const store = getStore();
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
