var gulp = require('gulp');
var jade = require('gulp-jade');
var rename = require ('rename');

gulp.task('html', function(){
    gulp.src('jade_files/*.jade')
         .pipe(jade({
             pretty:true }))
          .on('error', function (err) {
            console.log(err.toString());
            this.emit('end');
        })    
         .pipe(gulp.dest('./converted_html_files'))
});

gulp.task('watch',function(){
    gulp.watch('jade_files/*.jade',['html']);
});