import { makeScene2D, View2D } from '@motion-canvas/2d';

/**
 * --- Start ---
 * What is Docker?
 *
 * Docker is a container framework that allows us to instanciate Images and run them in our
 * computer.
 * 
 * > Show "What is Docker? and image" 
 * > Fades to black and shows Harware / Kernel Diagram
 *
 * Differences between Virtual Machines and Containers?
 *
 * > Shows title "Virtual Machine or Container?"
 *
 * Virtual Machines lays into "soft" simulation, where the virtual machine "thinks" it is
 * isolated, so it has to "emulate" all the services and Hardware interactions.
 *
 * > Displays "Rect" Virtual Machine above Kernel, with isolated services.
 *
 * > Adds a new column with the same "Hardware/Kernel" modules.
 * > Shows title "How a container emulates itself?"
 *
 * Containers uses a different emulation technique, where it "knows" it is being emulated,
 * so it can share the kernel services with the main OS, having a lightweight simulation
 * of an image, and allowing quick start/down times.
 *
 * > Adds 4 containers example above the Kernel module, with shared services.
 *
 * > Animation idea: Show "APIs" interaction, between the "containers" and a "virtual machine".
 *   - Virtual Machine has "internal calls", meanwhile Containers interact directly to
 *     the Kernel module.
 *
 * > Clears the other elements in the canvas, and zooms into a "Container".
 * > Displays title "Images? I don't have a camera."
 * > Move to `docker_image` scene
 *
 * --- End ---
 */
export default makeScene2D(function* (view: View2D) {

});
