document.addEventListener('DOMContentLoaded', () => {
    // --- DOM ELEMENT REFERENCES ---
    const moduleButtons = document.querySelectorAll('.module-btn');
    const warningDisplay = document.getElementById('warning-message');
    
    // --- EVENT LISTENERS ---
    
    // Listen for clicks on all module buttons
    moduleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const moduleName = button.dataset.moduleName;
            console.log(`Request to create module: ${moduleName}`);
            
            // **ACTION: Call the function to create a module in your Spline scene**
            createModuleInSpline(moduleName);
        });
    });

    // --- FUNCTIONS ---
    
    /**
     * **Placeholder Function:** This is where you will add your Spline API code.
     * It will tell the Spline scene to create a new instance of a module.
     * @param {string} name - The name of the module to create (e.g., 'CrewBunk').
     */
    function createModuleInSpline(name) {
        // Example Spline API call (this is a placeholder!):
        // spline.emitEvent('mouseDown', name);
        
        console.log(`In a real app, this would trigger the creation of a ${name} in Spline.`);
        
        // After a module is added, you would get data back from Spline and update metrics
        updateMetrics();
    }
    
    /**
     * **Placeholder Function:** Updates all the metric displays in the header.
     * You will get the data from your own logic that tracks all placed modules.
     */
    function updateMetrics() {
        // This is a placeholder. You'll replace these with real calculated values.
        const totalMass = 1250; // example value
        const totalPower = 3.5;  // example value
        
        document.getElementById('mass-metric').innerHTML = `<strong>Mass:</strong> ${totalMass} kg`;
        document.getElementById('power-metric').innerHTML = `<strong>Power:</strong> ${totalPower} kW`;
        
        console.log("Metrics would be updated here.");
    }

    /**
     * Displays a warning message to the user.
     * @param {string} message - The warning message to display.
     */
    function displayWarning(message) {
        warningDisplay.textContent = message;
    }

    // --- INITIALIZATION ---
    console.log("Habitat Designer UI Initialized.");
    displayWarning("Welcome! Select a module to begin."); // Initial message
});
