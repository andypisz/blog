import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Posts';

  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id ultricies felis.',
      loveIts: 0,
      date: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id ultricies felis. Aliquam et sodales nulla. Donec rutrum, justo quis cursus laoreet, metus mi lacinia sapien, ut hendrerit nulla purus a neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean aliquet mauris ut enim vehicula hendrerit. Vivamus sed nibh at neque aliquam lacinia. Vestibulum sit amet neque sed tellus ultricies finibus. Integer ut sodales risus. Integer lobortis dignissim augue, nec molestie velit rhoncus et.',
      loveIts: 0,
      date: new Date()
    },
    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id ultricies felis. Aliquam et sodales nulla. Donec rutrum, justo quis cursus laoreet, metus mi lacinia sapien, ut hendrerit nulla purus a neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      loveIts: 0,
      date: new Date()
    },
  ];
}
