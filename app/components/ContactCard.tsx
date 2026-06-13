export default function ContactCard() {

    const contact = {
        email: "olivia.bennett@email.com",
        phone: "+1 (555) 248-1099",
    };


    return (
        <div className="border border-gray-200 rounded-xl p-5">

            <h2 className="text-sm font-semibold text-gray-900 mb-4">
                Contact
            </h2>


            <div className="mb-3">
                <p className="text-xs text-gray-400 mb-1">
                    Email
                </p>

                <p className="text-sm text-gray-800">
                    {contact.email}
                </p>
            </div>


            <div>
                <p className="text-xs text-gray-400 mb-1">
                    Phone
                </p>

                <p className="text-sm text-gray-800">
                    {contact.phone}
                </p>
            </div>


        </div>
    );
}