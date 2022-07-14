class HealthBar {
    constructor(maxHealthParam, colorParam) {
        this.x = 50;
        this.y = 50;
        this.w = 150;
        this.h = 30;
        this.maxHealth = maxHealthParam;
        this.maxWidth = this.w;
        this.health = maxHealthParam;
        this.color = "green";
        











    }

    show = () => {
        ctx.strokeStyle = "yellow";
        ctx.lineWidth = 5;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.strokeRect(this.x, this.y, this.maxWidth, this.h);
    }

    updateHealth = (val) => {
        this.health = val;
        this.w = (this.health / this.maxHealth) * this.maxWidth; 
    }



/*     constructor(xParam, yParam, wParam, hParam, maxHealthParam, colorParam) {
        this.x = xParam;
        this.y = yParam;
        this.w = wParam;
        this.h = hParam;
        this.maxHealth = maxHealthParam;
        this.maxWidth = wParam;
        this.health = maxHealthParam;
        this.color = colorParam;











    } */







}