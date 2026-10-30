# Download  BrackOS latest release for x64

## How to boot:

### Qemu

_Note: These steps are for Debian. Compatibility is not guaranteed for anything, but we recommend debian or ubuntu._

1. Download the latest .iso file
2. Open a bash terminal (or WSL if on Windows) ()
3. Run ``` sudo apt update && sudo apt upgrade -y && sudo apt install build-essential nasm grub-pc-bin grub-common xorriso mtools qemu-system-x86 dosfstools -y ```
4. ```cd``` into the directory containing the .iso file downloaded earlier. Usually it is ```cd Downloads```.
5. Run ```qemu-system-x86_64 -cdrom kernel.iso -m 512```
6. A window should open. Once in GRUB, select the current BrackOS kernel and hit Enter.
7. You should be in the BrackOS shell! Good luck and happy tinkering!

### Real x64 hardware

_Note: This OS Kernel may damage your PC or delete your main SSD's files (a known issue)! We claim no responsibility for any of your actions. For now, it is best to stick to booting in a VM like Qemu._

_Note: Steps 4,5,and 6 are ambiguous on purpose. If you cannot get into any of those menus, consult your motherboard's manufacturer for assistance._

1. Download Balena Etcher from the [Official website](https://etcher.balena.io/#download-etcher)
2. Select the "Flash from file" button and navigate to the downloaded kernel. Open the kernel.
3. Select the target drive (**NOT YOUR CURRENT SSD**, a USB drive works well), then flash. Keep the USB Drive plugged in.
4. Boot into BIOS and select the "Legacy BIOS" or "Compatibility Mode" toggle if you have a newer PC.
5. Navigate to the startup menu and select the USB drive plugged in. You should see a GRUB screen.
6. Once in GRUB, select the current BrackOS kernel and hit Enter.
7. You should be in the BrackOS shell! Good luck and happy tinkering!

## Releases

### V1.2.0 (latest)

What's new:

Boot/init: /src/boot.s gained Multiboot2/long-mode checks, a stack guard page, and kernel page-table setup; /src/gdt.c, /src/paging.c, and /src/idt_stubs.s add safer x86-64 startup and crash handling.

Filesystem: /src/fat32.c adds FAT32 partition detection, 48-bit LBA support, a write-through sector cache, and safer free-cluster allocation and mount logic.

Memory management: /src/pmm.c and /src/heap.c introduced a physical-frame allocator and kernel heap, while /src/linker.ld and paging code enforce W^X and null-page protections.

User input/UI: /src/keyboard.c, /src/readline.c, /src/vga.c, and /src/serial.c improve PS/2 handling, command history/editing, cursor rendering, serial debugging output, and shell prompts.

Kernel reliability: /src/rtc.c, /src/timer.c, /src/idt.c, and /src/kernel.c add better RTC/timer accuracy, exception reporting, crash tests, and updated branding/command features across the OS.

Download:

[BrackOS V1.0.0 (.iso)](https://github.com/BrackOS/x64-kernel/releases/download/v1.2.0/BrackOS_v1.2.0.iso)    
    sha256:8b7cd7a9b56867cdaf6ebffc37f49f87e071e6f3b6eaa9a5aa062f7b4115582d

[Source code (.zip) ](https://github.com/BrackOS/x64-kernel/archive/refs/tags/v1.2.0.zip)

### V1.0.0 

What's new:

Fix bugs and a flattened folder structure from v0.2

First working version!

Download:

[BrackOS V1.0.0 (.iso)](https://github.com/BrackOS/x64-kernel/releases/download/v1.0.0/BrackOS_V1.0.0_x64.iso)    
    sha256:0296bc160a5ae48b010e1d8dc2e22f31875891b2627f70e5a30823de14f33865

[Source code (.zip) ](https://github.com/BrackOS/x64-kernel/archive/refs/tags/v1.0.0.zip)
