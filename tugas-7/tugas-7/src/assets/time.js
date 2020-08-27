export default function time() {
        var d = new Date();
        var hour = "";
        if (d.getHours() < 10) {
          hour = "0" + d.getHours();
        } else {
          hour = d.getHours();
        }
        var minutes = "";
        if (d.getMinutes() < 10) {
          minutes = "0" + d.getMinutes();
        } else {
          minutes = d.getMinutes();
        }
        var seconds = "";
        if (d.getSeconds() < 10) {
          seconds = "0" + d.getSeconds();
        } else {
          seconds = d.getSeconds();
        }
        var time = `${hour} : ${minutes} : ${seconds}`;
        return time;
      }
