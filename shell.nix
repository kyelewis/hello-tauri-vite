{ pkgs ? import <nixpkgs> {} }: 
with pkgs; 
mkShell {
  buildInputs = [ 
    cargo 
    rustc 
    nodejs-17_x 
    nodePackages.pnpm
    openssl
    openssl.dev
    pkgconfig
    glib
    glib.dev
    gtk3
    gtk3.dev
    webkitgtk
    webkitgtk.dev
  ];
}
