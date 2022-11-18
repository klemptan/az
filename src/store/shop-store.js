import { makeAutoObservable } from "mobx";

export default class ShopStore {
    constructor() {
        this._mainPageBannerSlider = {
            id: 1,
            slides: [
                {
                    id: 1,
                    img: 'https://cdn.wccftech.com/wp-content/uploads/2022/06/iPhone-14-Pro-1.jpg',
                    link: '#'
                },
                {
                    id: 2,
                    img: 'https://cdn.wccftech.com/wp-content/uploads/2022/06/iPhone-14-Pro-1.jpg',
                    link: '#'
                }
            ]
        }
        makeAutoObservable(this)
    }

    setMainPageBanner(slider) {
        this._mainPageBannerSlider = slider
    }

    get mainPageBannerSlider(){
        return this._mainPageBannerSlider
    }
}