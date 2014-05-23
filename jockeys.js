var chicken = 10;
var cow = 11;
var pig = 12;
var sheep = 13;
var zombie = 32;
var creeper = 33;
var skeleton = 34;
var spider = 35;
var zombiepigman = 36;

var d = android.app.Dialog;
var ll = android.widget.LinearLayout;
var b = android.widget.Button;
var s = android.widget.Spinner;
var aa = android.widget.ArrayAdapter;
var g = android.view.Gravity;
var v = android.view.View;
var l = java.lang;

var zhuowei = net.zhuoweizhang.mcpelauncher.R.layout.patch_list_item;

var ents = [];
var animal = [];
var mobs = ["Chicken", "Cow", "Pig", "Sheep", "Zombie", "Creeper", "Skeleton", "Spider", "Zombie Pigman"];

var GUI;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var mob;

function newLevel() {

    ctx.runOnUiThread(new java.lang.Runnable() {

        run: function () {

            try {

                GUI = new android.widget.PopupWindow();

                var layout = new ll(ctx);
                var layoutd = new ll(ctx);
                var btn = new b(ctx);
                var add = new b(ctx);
                var spawn = new b(ctx);
                var selection = new s(ctx);
                var spinnerArrayAdapter = new aa(ctx, zhuowei, mobs);
                var dialog = new d(ctx);

                btn.setText("Jockeys");
                add.setText("+");
                spawn.setText("Spawn");

                selection.setAdapter(spinnerArrayAdapter);

                layout.setOrientation(ll.VERTICAL);
                layout.setGravity(g.RIGHT);
                layout.addView(btn);

                layoutd.addView(selection);
                layoutd.addView(add);
                layoutd.addView(spawn);

                dialog.setContentView(layoutd);
                dialog.setTitle("Custom Jockeys menu!");

                GUI.setContentView(layout);
                GUI.setHeight(ll.LayoutParams.WRAP_CONTENT);
                GUI.setWidth(ll.LayoutParams.WRAP_CONTENT);
                GUI.showAtLocation(ctx.getWindow().getDecorView(), g.BOTTOM | g.RIGHT, 0, 0);

                btn.setOnClickListener(new v.OnClickListener() {

                    onClick: function (view) {

                        dialog.show();

                    }
                });

                spawn.setOnClickListener(new v.OnClickListener() {

                    onClick: function (view) {

                        for (var i = 0; i < ents.length; i++) {
                            animal[i] = Level.spawnMob(getPlayerX(), getPlayerY(), getPlayerZ(), ents[i]);
                            //print(ents[i]);
                            if (i > 0) {
                                rideAnimal(animal[i], animal[i - 1]);
                            }
                        }
                        ents = [];
                    }
                });

                add.setOnClickListener(new v.OnClickListener() {

                    onClick: function (view) {

                        mob = selection.getSelectedItem();

                        if (mob == mobs[0]) {
                            ents.push(chicken);
                        }
                        if (mob == mobs[1]) {
                            ents.push(cow);
                        }
                        if (mob == mobs[2]) {
                            ents.push(pig);
                        }
                        if (mob == mobs[3]) {
                            ents.push(sheep);
                        }
                        if (mob == mobs[4]) {
                            ents.push(zombie);
                        }
                        if (mob == mobs[5]) {
                            ents.push(creeper);
                        }
                        if (mob == mobs[6]) {
                            ents.push(skeleton);
                        }
                        if (mob == mobs[7]) {
                            ents.push(spider);
                        }
                        if (mob == mobs[8]) {
                            ents.push(zombiepigman);
                        }

                    }
                });

            } catch (e) {
                print("Error: " + e)
            }
        }
    });
}

function leaveGame() {
    ctx.runOnUiThread(new l.Runnable() {
        run: function () {
            if (GUI != null) {
                GUI.dismiss();
            }
        }
    });
}
