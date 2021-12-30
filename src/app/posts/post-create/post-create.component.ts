import { Component, Inject } from "@angular/core";
import { NgForm } from "@angular/forms";
import { DOCUMENT } from '@angular/common';


import { PostsService } from "../posts.service";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"]
})
export class PostCreateComponent {
  enteredTitle = "";
  enteredContent = "";

  constructor(public postsService: PostsService, @Inject(DOCUMENT) private document: Document) { }

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
    this.goToUrl();

  }

  goToUrl(): void {
    this.document.location.href = '/';
  }
}
