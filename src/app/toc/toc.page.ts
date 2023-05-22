import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {

  public chapters = [
    {
      title: "Chapter 1 | Great Beginnings for the Hero!",
      url: "/chapter1",
      chapterNo: 1
    },
    {
      title: "Chapter 2 | And Brutal Endings for Them Too.",
      url: "/chapter2",
      chapterNo: 2
    },
    {
      title: "Chapter 3 | Redemption for the...Chicken?",
      url: "/chapter3",
      chapterNo: 3
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
