export default function() {
  // Register <--> Login
  this.transition(
    this.fromRoute('auth.login'),
    this.toRoute('auth.register'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
  // Sign Up <--> Login
  this.transition(
    this.fromRoute('auth.sign-up'),
    this.toRoute('auth.login'),
    this.use('toRight'),
    this.reverse('toLeft')
  );

  // Login <--> App
  this.transition(
    this.fromRoute('auth'),
    this.toRoute('app'),
    this.use('toUp'),
    this.reverse('toDown')
  );

  // ParentingGroups <--> My Profile
  this.transition(
    this.fromRoute('app.parenting-groups'),
    this.toRoute('app.my-profile'),
    this.use('toUp'),
    this.reverse('toDown')
  );
  // Parenting Groups <--> Conversation
  this.transition(
    this.fromRoute('app.parenting-groups'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
