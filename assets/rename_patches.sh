#!/bin/bash

index=0;

for patch in patches/*; do
	echo "$index : $patch"
	target="patches/patch-$index.jpg"
	mv $patch $target
	((index++))
done
