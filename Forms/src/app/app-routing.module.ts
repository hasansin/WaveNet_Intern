import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { FormComponent } from './form-01/form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'Form', component: FormComponent },
  { path: 'Profile_Editor', component: ProfileEditorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
