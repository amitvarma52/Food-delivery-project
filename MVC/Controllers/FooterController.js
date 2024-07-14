import FooterModel from "../Model/FooterModel.js";

// Controller function to create a new footer
export const createfooter = async (req, res) => {
    try {
        const { footer_className, footer_heading, footer_links } = req.body;

        // Validation
        if (!footer_className) {
            return res.status(400).send("footer_className is required");
        }
        if (!footer_heading) {
            return res.status(400).send("footer_heading is required");
        }
        if (!footer_links) {
            return res.status(400).send("footer_links is required");
        }

        // Check if footer with same heading already exists
        const existingFooter = await FooterModel.findOne({ footer_heading });
        if (existingFooter) {
            return res.status(400).send("Footer with this heading already exists");
        }

        // Create new footer entry
        const newFooter = await FooterModel.create({
            footer_className,
            footer_heading,
            footer_links: footer_links.split(",").map(link => link.trim()) // Convert links string to array
        });

        res.status(201).send({
            status: "success",
            message: "Footer registered successfully",
            footer: newFooter
        });
    } catch (error) {
        console.error("Error in API:", error);
        res.status(500).send("Internal server error");
    }
};

// Controller function to retrieve all footers
export const getfooter = async (req, res) => {
    try {
        const footers = await FooterModel.find({});

        if (!footers || footers.length === 0) {
            return res.status(404).send('No footers found');
        }

        res.status(200).send({
            status: 'success',
            message: 'Get all footer details successfully',
            footers: footers
        });
    } catch (error) {
        console.error("Error in API:", error);
        res.status(500).send("Internal server error");
    }
};