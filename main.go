
package main

import (
	"net/http"
	"log"
	"strings"
	"html/template"
	"google.golang.org/appengine"
	"time"
)

func main() {
	http.HandleFunc("/", handle_home)
	appengine.Main()
}

func handle_home(w http.ResponseWriter, r *http.Request) {
	log.Printf("Home Accessed")
	log.Printf(r.URL.Path)
	log.Printf("Req: %s %s\n", r.Host, r.URL.Path)
	t, _ := template.ParseFiles("views/index.html")

	jsfile := r.URL.Path
	timestr := time.Now().Format("20060102150405")
	if jsfile == "/" {
		jsfile = "/citizenship"
	} else if strings.Index(jsfile, ".") > -1 {
		splited := strings.Split(jsfile, ".")
		jsfile = splited[0]
	}
	data := struct {
		Jsfile string
		Timestr string
	}{
		jsfile,
		timestr,
	}
	t.Execute(w, data)
}



