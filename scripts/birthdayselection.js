// 友情提示，这东西能用的前提是你加载了jQuery，不过校网服务器上有

$(function() {
    var names = new Array("Amy", "Boppy", "Colin", "Glock", "Bruce", "Bob", "Jeb", "Valentina", "Yankee", "Alpha", "Baro", "Charli",
        "Echo", "Dennie", "Flask", "Gloria", "Heno", "Iden", "Julie", "Krumn", "Lihua", "Madam", "Nage", "Opea", "Plato", "Qiano",
        "Rubby", "Sweager", "Turia", "Ubnia", "Veloc", "Wanda", "Xray", "Simon", "Vartina", "Helio", "Forksa", "Genda", "Pangda");
    var birthdays = new Array("11.08", "12.06", "03.15", "09.30", "05.01", "05.05", "05.10", "09.24",
        "12.08", "02.27", "06.16", "10.31", "07.08", "12.31", "10.06", "12.16", "10.06", "04.23",
        "11.26", "11.12", "03.24", "05.15", "03.27", "08.14", "09.08", "02.09", "05.25", "10.27",
        "01.22", "06.20", "02.23", "03.31", "03.25", "10.10", "06.28", "06.28", "04.18", "07.14",
        "05.05"
    );//人名-生日
    var results = "",
        flag = false;
    for (var i = 0; i < names.length; i++) {
        var dt = "";
        if (new Date().getMonth() > 8) dt = (new Date().getMonth() + 1) + ".";
        else dt = "0" + (new Date().getMonth() + 1) + ".";
        if (new Date().getDate() > 9) dt = dt + new Date().getDate();
        else dt = dt + "0" + new Date().getDate();
        if (birthdays[i] == dt) {
            results = results + names[i] + ",";
            flag = true;
        }
    }
    if (flag) {
        results = results.substring(0, results.length - 1) + " " + "生日快乐🎂🎂！！！";
    } else {
        results = "今天没人生日";
    }
    document.getElementById("birthday-div").innerHTML = (results);
});
