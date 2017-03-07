// Generated by CoffeeScript 1.12.4
var drop, file_io, first, fn, is_empty, normalize_args, opts, parsed_args, parsegs, print_usage, run;

parsegs = require('minimist');

fn = require('f-empower');

file_io = require('./cs/fella-io');

drop = fn.drop, first = fn.first, is_empty = fn.is_empty;

parsed_args = parsegs(drop(2, process.argv));

normalize_args = function(args) {
  if (is_empty(args._)) {
    return null;
  }
  return {
    "in": first(args._),
    out: args.o || args.out,
    help: args.h || args.help
  };
};

run = function(opts) {
  var on_done;
  on_done = function() {};
  return file_io(opts["in"], opts.out, on_done);
};

print_usage = function() {
  return console.log("Usage:\ncjfella  -o cjs-style.coffee  amd-style.coffee");
};

opts = normalize_args(parsed_args);

if (!opts || opts.help) {
  print_usage();
} else {
  run(opts);
}