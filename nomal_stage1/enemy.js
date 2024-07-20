//
//  ノーマルステージの敵のクラス
//

class Enemy
{
    constructor(x, y, direction){
        this.x = x;
        this.y = y;
        this.count = 0;
        this.dir = direction;
    }

    update(){
        if((frameCount%20) == 19) this.count++;
    }

    drawEnemy(start_x, start_y, size_x, size_y){
        vcon.drawImage(png_enemy, start_x, start_y, size_x, size_y, this.x, this.y, size_x, size_y);
    }

    //倒された時のアニメーション
    defeatEnemy(){
        if((frameCount%200) <= 20) vcon.drawImage(defeat_enemy_animation, 0, 0, 16, 16, 100, 100, 32, 32);
        else if((frameCount%200) > 20 && (frameCount%200) <= 40) vcon.drawImage(defeat_enemy_animation, 16, 0, 16, 16, 100, 100, 32, 32);
        else if((frameCount%200) > 40 && (frameCount%200) <= 60) vcon.drawImage(defeat_enemy_animation, 32, 0, 16, 16, 100, 100, 32, 32);
        else if((frameCount%200) > 60 && (frameCount%200) <= 80) vcon.drawImage(defeat_enemy_animation, 48, 0, 16, 16, 100, 100, 32, 32);
        else if((frameCount%200) > 80 && (frameCount%200) <= 100) vcon.drawImage(defeat_enemy_animation, 0, 16, 16, 16, 100, 100, 32, 32);
        else if((frameCount%200) > 100 && (frameCount%200) <= 120) vcon.drawImage(defeat_enemy_animation, 16, 16, 16, 16, 100, 100, 32, 32);
        else if((frameCount%200) > 120 && (frameCount%200) <= 140) vcon.drawImage(defeat_enemy_animation, 32, 16, 16, 16, 100, 100, 32, 32);
        else if((frameCount%200) > 140 && (frameCount%200) <= 160) vcon.drawImage(defeat_enemy_animation, 48, 16, 16, 16, 100, 100, 32, 32);
        else if((frameCount%200) > 160 && (frameCount%200) <= 180) vcon.drawImage(defeat_enemy_animation, 0, 32, 16, 16, 100, 100, 32, 32);
        else vcon.drawImage(defeat_enemy_animation, 16, 32, 16, 16, 100, 100, 32, 32);
    }

    draw(){
        //倒されたらこのアニメーション？
        this.defeatEnemy();
    }

}

//
//  アンコウのクラス
//

class Anko extends Enemy
{
    constructor(x, y, direction){
        super(x, y, direction);
    }

    update(){
        super.update();
        if(this.dir == 0){
            if((frameCount%20) == 19) this.x -= 2;
        }
        else if((frameCount%20) == 19) this.x += 2;
    }

    animation(){
        let px = 0;
        if(this.dir == 0){
            if((frameCount%14) < 7) px = 32 * (this.count % 2);
            super.drawEnemy(px, 0, 32, 32);
        }
        else {
            if((this.count%14) < 7) px = 96 - 32 * (this.count % 2);
            else px = 96;
            super.drawEnemy(px, 0, 32, 32);
        }
    }

    draw(){
        this.animation(0, 0, 32, 32);
        super.draw();
    }
}

//
//  マンボウのクラス
//

class Manbo extends Enemy
{
    constructor(x, y, direction){
        super(x, y, direction);
    }

    update(){
        super.update();
        if(this.dir == 0){
            if((frameCount%20) == 19) this.x -= 2;
        }
        else if((frameCount%20) == 19) this.x += 2;
    }

    animation(){
        let px = 128;
        super.drawEnemy(px, 0, 32, 32);
    }

    draw(){
        this.animation();
        super.draw();
    }
}

//
//  ウニのクラス
//

class Uni extends Enemy
{
    constructor(x, y, direction){
        super(x, y, direction);
    }

    update(){
        super.update();
        if(this.dir == 0){
            if((frameCount%20) == 19) this.x -= 2;
        }
        else if((frameCount%20) == 19) this.x += 2;
    }

    draw(){
        super.drawEnemy(0, 32, 16, 32);
        super.draw();
    }
}

//
//  たこのクラス
//

class Tako extends Enemy
{
    constructor(x, y, direction){
        super(x, y, direction);
    }

    update(){
        super.update();
        if(this.dir == 0){
            if((frameCount%20) == 19) this.x -= 2;
        }
        else if((frameCount%20) == 19) this.x += 2;
    }

    draw(){
        super.drawEnemy(32, 48, 16, 16);
        super.draw();
    }
}

//
//  くらげのクラス
//

class Kurage extends Enemy
{
    constructor(x, y, direction){
        super(x, y, direction);
        this.rand = 0;
    }

    update(){
        super.update();

        //クラゲをランダムに移動させる
        if((frameCount%10) <= 5) this.rand = Math.floor(Math.random() * 100);
        if((this.rand%4) == 0) this.x -= 2;
        else if((this.rand%4) == 1) this.x += 2;
        else if((this.rand%4) == 2) this.y += 2;
        else if((this.rand%4) == 3) this.y -= 2;

    }

    draw(){
        super.drawEnemy(64, 48, 16, 16);
        super.draw();
    }
}

//
//  サメのクラス
//

class Same extends Enemy
{
    constructor(x, y, direction){
        super(x, y, direction);
    }

    update(){
        super.update();
        if(this.dir == 0){
            if((frameCount%20) == 19) this.x -= 2;
        }
        else if((frameCount%20) == 19) this.x += 2;
    }

    animation(){
        let px = 96;
        if(this.dir == 0){
            if((frameCount%14) < 7) px += 32 * (this.count % 2);
            super.drawEnemy(px, 48, 32, 16);
        }
        else {
            if((this.count%14) < 7) px = 192 - 32 * (this.count % 2);
            else px = 192;
            super.drawEnemy(px, 48, 32, 16);
        }
    }

    draw(){
        this.animation();
        super.draw();
    }
}

//
//  ウツボのクラス
//

class Utsubo extends Enemy
{
    constructor(x, y, direction){
        super(x, y, direction);
    }

    update(){
        super.update();
    }

    animation(){
        let px = 0;
        if((this.count%14) < 7) px = 32 * (this.count % 7);
        else px = 192 - 32 * (this.count % 7);
        super.drawEnemy(px, 64, 32, 32);
    }

    draw(){
        this.animation();
        super.draw();
    }
}