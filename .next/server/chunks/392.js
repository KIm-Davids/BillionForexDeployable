"use strict";
exports.id = 392;
exports.ids = [392];
exports.modules = {

/***/ 8392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ Dashboard)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: external "lucide-react"
var external_lucide_react_ = __webpack_require__(2423);
// EXTERNAL MODULE: ./src/components/theme-provider.jsx
var theme_provider = __webpack_require__(5492);
// EXTERNAL MODULE: external "@radix-ui/react-slot"
var react_slot_ = __webpack_require__(2324);
// EXTERNAL MODULE: external "class-variance-authority"
var external_class_variance_authority_ = __webpack_require__(1169);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
// EXTERNAL MODULE: external "tailwind-merge"
var external_tailwind_merge_ = __webpack_require__(5873);
;// CONCATENATED MODULE: ./src/components/lib/utils.js


function cn(...inputs) {
    return (0,external_tailwind_merge_.twMerge)((0,external_clsx_.clsx)(inputs));
}

;// CONCATENATED MODULE: ./src/components/ui/button.tsx





const buttonVariants = (0,external_class_variance_authority_.cva)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ react_.forwardRef(({ className , variant , size , asChild =false , ...props }, ref)=>{
    const Comp = asChild ? react_slot_.Slot : "button";
    return /*#__PURE__*/ jsx_runtime_.jsx(Comp, {
        className: cn(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    });
});
Button.displayName = "Button";


;// CONCATENATED MODULE: ./src/components/ui/card.tsx



const Card = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: ref,
        className: cn("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: ref,
        className: cn("flex flex-col space-y-1.5 p-6", className),
        ...props
    }));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: ref,
        className: cn("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: ref,
        className: cn("text-sm text-muted-foreground", className),
        ...props
    }));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: ref,
        className: cn("p-6 pt-0", className),
        ...props
    }));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: ref,
        className: cn("flex items-center p-6 pt-0", className),
        ...props
    }));
CardFooter.displayName = "CardFooter";


// EXTERNAL MODULE: external "@radix-ui/react-dropdown-menu"
var react_dropdown_menu_ = __webpack_require__(8532);
;// CONCATENATED MODULE: ./src/components/ui/dropdown-menu.tsx





const DropdownMenu = react_dropdown_menu_.Root;
const DropdownMenuTrigger = react_dropdown_menu_.Trigger;
const DropdownMenuGroup = react_dropdown_menu_.Group;
const DropdownMenuPortal = react_dropdown_menu_.Portal;
const DropdownMenuSub = react_dropdown_menu_.Sub;
const DropdownMenuRadioGroup = react_dropdown_menu_.RadioGroup;
const DropdownMenuSubTrigger = /*#__PURE__*/ react_.forwardRef(({ className , inset , children , ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_dropdown_menu_.SubTrigger, {
        ref: ref,
        className: cn("flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.ChevronRight, {
                className: "ml-auto"
            })
        ]
    }));
DropdownMenuSubTrigger.displayName = react_dropdown_menu_.SubTrigger.displayName;
const DropdownMenuSubContent = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(react_dropdown_menu_.SubContent, {
        ref: ref,
        className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
        ...props
    }));
DropdownMenuSubContent.displayName = react_dropdown_menu_.SubContent.displayName;
const DropdownMenuContent = /*#__PURE__*/ react_.forwardRef(({ className , sideOffset =4 , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(react_dropdown_menu_.Portal, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_dropdown_menu_.Content, {
            ref: ref,
            sideOffset: sideOffset,
            className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        })
    }));
DropdownMenuContent.displayName = react_dropdown_menu_.Content.displayName;
const DropdownMenuItem = /*#__PURE__*/ react_.forwardRef(({ className , inset , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(react_dropdown_menu_.Item, {
        ref: ref,
        className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
        ...props
    }));
DropdownMenuItem.displayName = react_dropdown_menu_.Item.displayName;
const DropdownMenuCheckboxItem = /*#__PURE__*/ react_.forwardRef(({ className , children , checked , ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_dropdown_menu_.CheckboxItem, {
        ref: ref,
        className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_dropdown_menu_.ItemIndicator, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.Check, {
                        className: "h-4 w-4"
                    })
                })
            }),
            children
        ]
    }));
DropdownMenuCheckboxItem.displayName = react_dropdown_menu_.CheckboxItem.displayName;
const DropdownMenuRadioItem = /*#__PURE__*/ react_.forwardRef(({ className , children , ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_dropdown_menu_.RadioItem, {
        ref: ref,
        className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_dropdown_menu_.ItemIndicator, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.Circle, {
                        className: "h-2 w-2 fill-current"
                    })
                })
            }),
            children
        ]
    }));
DropdownMenuRadioItem.displayName = react_dropdown_menu_.RadioItem.displayName;
const DropdownMenuLabel = /*#__PURE__*/ react_.forwardRef(({ className , inset , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(react_dropdown_menu_.Label, {
        ref: ref,
        className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
        ...props
    }));
DropdownMenuLabel.displayName = react_dropdown_menu_.Label.displayName;
const DropdownMenuSeparator = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(react_dropdown_menu_.Separator, {
        ref: ref,
        className: cn("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }));
DropdownMenuSeparator.displayName = react_dropdown_menu_.Separator.displayName;
const DropdownMenuShortcut = ({ className , ...props })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: cn("ml-auto text-xs tracking-widest opacity-60", className),
        ...props
    });
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";


;// CONCATENATED MODULE: ./src/components/ui/input.tsx



const Input = /*#__PURE__*/ react_.forwardRef(({ className , type , ...props }, ref)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("input", {
        type: type,
        className: cn("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    });
});
Input.displayName = "Input";


// EXTERNAL MODULE: external "@radix-ui/react-tabs"
var react_tabs_ = __webpack_require__(5665);
;// CONCATENATED MODULE: ./src/components/ui/tabs.tsx




const Tabs = react_tabs_.Root;
const TabsList = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(react_tabs_.List, {
        ref: ref,
        className: cn("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", className),
        ...props
    }));
TabsList.displayName = react_tabs_.List.displayName;
const TabsTrigger = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(react_tabs_.Trigger, {
        ref: ref,
        className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", className),
        ...props
    }));
TabsTrigger.displayName = react_tabs_.Trigger.displayName;
const TabsContent = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(react_tabs_.Content, {
        ref: ref,
        className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
        ...props
    }));
TabsContent.displayName = react_tabs_.Content.displayName;


;// CONCATENATED MODULE: ./src/components/ui/badge.tsx




const badgeVariants = (0,external_class_variance_authority_.cva)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className , variant , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: cn(badgeVariants({
            variant
        }), className),
        ...props
    });
}


// EXTERNAL MODULE: external "@radix-ui/react-dialog"
var react_dialog_ = __webpack_require__(3363);
;// CONCATENATED MODULE: ./src/components/ui/dialog.tsx





const Dialog = react_dialog_.Root;
const DialogTrigger = react_dialog_.Trigger;
const DialogPortal = react_dialog_.Portal;
const DialogClose = react_dialog_.Close;
const DialogOverlay = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(react_dialog_.Overlay, {
        ref: ref,
        className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }));
DialogOverlay.displayName = react_dialog_.Overlay.displayName;
const DialogContent = /*#__PURE__*/ react_.forwardRef(({ className , children , ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(DialogPortal, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(DialogOverlay, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_dialog_.Content, {
                ref: ref,
                className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_dialog_.Close, {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.X, {
                                className: "h-4 w-4"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "sr-only",
                                children: "Close"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
DialogContent.displayName = react_dialog_.Content.displayName;
const DialogHeader = ({ className , ...props })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    });
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className , ...props })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    });
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(react_dialog_.Title, {
        ref: ref,
        className: cn("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }));
DialogTitle.displayName = react_dialog_.Title.displayName;
const DialogDescription = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(react_dialog_.Description, {
        ref: ref,
        className: cn("text-sm text-muted-foreground", className),
        ...props
    }));
DialogDescription.displayName = react_dialog_.Description.displayName;


;// CONCATENATED MODULE: ./src/components/ui/table.tsx



const Table = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "relative w-full overflow-auto",
        children: /*#__PURE__*/ jsx_runtime_.jsx("table", {
            ref: ref,
            className: cn("w-full caption-bottom text-sm", className),
            ...props
        })
    }));
Table.displayName = "Table";
const TableHeader = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("thead", {
        ref: ref,
        className: cn("[&_tr]:border-b", className),
        ...props
    }));
TableHeader.displayName = "TableHeader";
const TableBody = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("tbody", {
        ref: ref,
        className: cn("[&_tr:last-child]:border-0", className),
        ...props
    }));
TableBody.displayName = "TableBody";
const TableFooter = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("tfoot", {
        ref: ref,
        className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
        ...props
    }));
TableFooter.displayName = "TableFooter";
const TableRow = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("tr", {
        ref: ref,
        className: cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
        ...props
    }));
TableRow.displayName = "TableRow";
const TableHead = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("th", {
        ref: ref,
        className: cn("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className),
        ...props
    }));
TableHead.displayName = "TableHead";
const TableCell = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("td", {
        ref: ref,
        className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
        ...props
    }));
TableCell.displayName = "TableCell";
const TableCaption = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("caption", {
        ref: ref,
        className: cn("mt-4 text-sm text-muted-foreground", className),
        ...props
    }));
TableCaption.displayName = "TableCaption";


;// CONCATENATED MODULE: ./src/components/user-list.jsx








// Mock user data
const users = [
    {
        id: 1,
        name: "John Doe",
        withdrawDueDate: "2023-12-01",
        packages: "Test",
        email: "john.doe@example.com",
        amount: "2000.00",
        status: "Online",
        lastActive: "Just now",
        registeredDate: "Jan 12, 2023"
    },
    {
        id: 2,
        name: "Jane Smith",
        withdrawDueDate: "2023-12-01",
        packages: "Pro",
        email: "jane.smith@example.com",
        amount: "100,000.000",
        status: "Online",
        lastActive: "5 minutes ago",
        registeredDate: "Mar 5, 2023"
    },
    {
        id: 3,
        name: "Robert Johnson",
        withdrawDueDate: "2023-12-01",
        packages: "Pro",
        email: "robert.johnson@example.com",
        amount: "200.00",
        status: "Offline",
        lastActive: "2 hours ago",
        registeredDate: "Apr 18, 2023"
    },
    {
        id: 4,
        name: "Emily Davis",
        withdrawDueDate: "2023-12-01",
        packages: "Premium",
        email: "emily.davis@example.com",
        amount: "30,000.00",
        status: "Offline",
        lastActive: "1 day ago",
        registeredDate: "Jun 22, 2023"
    },
    {
        id: 5,
        name: "Michael Wilson",
        withdrawDueDate: "2023-12-01",
        packages: "Test",
        email: "michael.wilson@example.com",
        amount: "50,000",
        status: "Online",
        lastActive: "Just now",
        registeredDate: "Aug 3, 2023"
    },
    {
        id: 6,
        name: "Sarah Brown",
        withdrawDueDate: "2023-12-01",
        packages: "Pro",
        email: "sarah.brown@example.com",
        amount: "300.00",
        status: "Offline",
        lastActive: "3 days ago",
        registeredDate: "Oct 15, 2023"
    },
    {
        id: 7,
        name: "David Miller",
        withdrawDueDate: "2023-12-01",
        packages: "Premium",
        email: "david.miller@example.com",
        amount: "100.00",
        status: "Online",
        lastActive: "30 minutes ago",
        registeredDate: "Nov 7, 2023"
    }
];
const UserList = ({ searchQuery  })=>{
    const [selectedUser, setSelectedUser] = (0,react_.useState)(null);
    const [isDialogOpen, setIsDialogOpen] = (0,react_.useState)(false);
    const [suspendedUsers, setSuspendedUsers] = (0,react_.useState)([]);
    const filteredUsers = users.filter((user)=>user.name.toLowerCase().includes(searchQuery.toLowerCase()) || user.email.toLowerCase().includes(searchQuery.toLowerCase()) || user.role.toLowerCase().includes(searchQuery.toLowerCase()));
    const handleViewDetails = (user)=>{
        setSelectedUser(user);
        setIsDialogOpen(true);
    };
    const handleSuspendUser = (userId)=>{
        if (suspendedUsers.includes(userId)) {
            setSuspendedUsers(suspendedUsers.filter((id)=>id !== userId));
        } else {
            setSuspendedUsers([
                ...suspendedUsers,
                userId
            ]);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Table, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(TableHeader, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TableRow, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                                    children: "Name"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                                    children: "Email"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                                    children: "Deposit"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                                    children: "Withdraw due date"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                                    children: "Package"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                                    children: "Status"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                                    children: "Investment Date"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                                    children: "Registration Date"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                                    className: "text-right",
                                    children: "Actions"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(TableBody, {
                        children: filteredUsers.map((user)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(TableRow, {
                                className: suspendedUsers.includes(user.id) ? "opacity-50" : "",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                        className: "font-medium",
                                        children: user.name
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                        children: user.email
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                        children: user.amount
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                        children: user.withdrawDueDate
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                        children: user.packages
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Badge, {
                                            variant: user.status === "Online" ? "success" : "secondary",
                                            children: [
                                                user.status === "Online" ? /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.Check, {
                                                    className: "mr-1 h-3 w-3"
                                                }) : /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.Ban, {
                                                    className: "mr-1 h-3 w-3"
                                                }),
                                                user.status
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                        children: user.lastActive
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                        children: user.registeredDate
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                        className: "text-right",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DropdownMenu, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(DropdownMenuTrigger, {
                                                    asChild: true,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button, {
                                                        variant: "ghost",
                                                        size: "icon",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.MoreHorizontal, {
                                                                className: "h-4 w-4"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "sr-only",
                                                                children: "Actions"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DropdownMenuContent, {
                                                    align: "end",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DropdownMenuItem, {
                                                            onClick: ()=>handleViewDetails(user),
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.UserCog, {
                                                                    className: "mr-2 h-4 w-4"
                                                                }),
                                                                "View Details"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DropdownMenuItem, {
                                                            onClick: ()=>handleSuspendUser(user.id),
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.Ban, {
                                                                    className: "mr-2 h-4 w-4"
                                                                }),
                                                                suspendedUsers.includes(user.id) ? "Unsuspend User" : "Suspend User"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }, user.id))
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Dialog, {
                open: isDialogOpen,
                onOpenChange: setIsDialogOpen,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DialogContent, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DialogHeader, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(DialogTitle, {
                                    children: "User Details"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(DialogDescription, {
                                    children: "Detailed information about the selected user."
                                })
                            ]
                        }),
                        selectedUser && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "grid gap-4 py-4",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "grid grid-cols-4 items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-sm font-medium",
                                            children: "Name:"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "col-span-3",
                                            children: selectedUser.name
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "grid grid-cols-4 items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-sm font-medium",
                                            children: "Email:"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "col-span-3",
                                            children: selectedUser.email
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "grid grid-cols-4 items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-sm font-medium",
                                            children: "Amount:"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "col-span-3",
                                            children: selectedUser.amount
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "grid grid-cols-4 items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-sm font-medium",
                                            children: "Withdraw due Date:"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "col-span-3",
                                            children: selectedUser.withdrawDueDate
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "grid grid-cols-4 items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-sm font-medium",
                                            children: "Withdraw due Date:"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "col-span-3",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Badge, {
                                                variant: selectedUser.status === "Online" ? "success" : "secondary",
                                                children: selectedUser.status
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "grid grid-cols-4 items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-sm font-medium",
                                            children: "Last Active:"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "col-span-3",
                                            children: selectedUser.lastActive
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "grid grid-cols-4 items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-sm font-medium",
                                            children: "Registered:"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "col-span-3",
                                            children: selectedUser.registeredDate
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "grid grid-cols-4 items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-sm font-medium",
                                            children: "Status:"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "col-span-3",
                                            children: suspendedUsers.includes(selectedUser.id) ? /*#__PURE__*/ jsx_runtime_.jsx(Badge, {
                                                variant: "destructive",
                                                children: "Suspended"
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx(Badge, {
                                                variant: "success",
                                                children: "Active"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/user-stats.jsx



function UserStats() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card, {
                className: "border-purple-700/20",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader, {
                        className: "flex flex-row items-center justify-between space-y-0 pb-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(CardTitle, {
                                className: "text-sm font-medium",
                                children: "Total Users"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.Users, {
                                className: "h-4 w-4 text-blue-400"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardContent, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-2xl font-bold",
                                children: "1,248"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-xs text-muted-foreground",
                                children: "+180 from last month"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card, {
                className: "border-purple-700/20",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader, {
                        className: "flex flex-row items-center justify-between space-y-0 pb-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(CardTitle, {
                                className: "text-sm font-medium",
                                children: "Active Users"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.UserCheck, {
                                className: "h-4 w-4 text-blue-400"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardContent, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-2xl font-bold",
                                children: "624"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center text-xs text-green-500",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.ArrowUp, {
                                        className: "mr-1 h-3 w-3"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "12% increase"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card, {
                className: "border-purple-700/20",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader, {
                        className: "flex flex-row items-center justify-between space-y-0 pb-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(CardTitle, {
                                className: "text-sm font-medium",
                                children: "New Signups"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.UserPlus, {
                                className: "h-4 w-4 text-blue-400"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardContent, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-2xl font-bold",
                                children: "42"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center text-xs text-green-500",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.ArrowUp, {
                                        className: "mr-1 h-3 w-3"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "8% increase"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card, {
                className: "border-purple-700/20",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader, {
                        className: "flex flex-row items-center justify-between space-y-0 pb-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(CardTitle, {
                                className: "text-sm font-medium",
                                children: "Inactive Users"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.UserMinus, {
                                className: "h-4 w-4 text-blue-400"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardContent, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-2xl font-bold",
                                children: "89"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center text-xs text-red-500",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.ArrowDown, {
                                        className: "mr-1 h-3 w-3"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "3% decrease"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: external "@radix-ui/react-avatar"
var react_avatar_ = __webpack_require__(7620);
;// CONCATENATED MODULE: ./src/components/ui/avatar.tsx




const Avatar = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(react_avatar_.Root, {
        ref: ref,
        className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
        ...props
    }));
Avatar.displayName = react_avatar_.Root.displayName;
const AvatarImage = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(react_avatar_.Image, {
        ref: ref,
        className: cn("aspect-square h-full w-full", className),
        ...props
    }));
AvatarImage.displayName = react_avatar_.Image.displayName;
const AvatarFallback = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(react_avatar_.Fallback, {
        ref: ref,
        className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
        ...props
    }));
AvatarFallback.displayName = react_avatar_.Fallback.displayName;


;// CONCATENATED MODULE: ./src/components/recent-activities.jsx




// Mock activity data
const activities = [
    {
        id: 1,
        user: {
            name: "John Doe",
            email: "john.doe@example.com",
            avatar: "/placeholder.svg?height=40&width=40"
        },
        action: "Login",
        timestamp: "2 minutes ago",
        icon: external_lucide_react_.LogIn
    },
    {
        id: 2,
        user: {
            name: "Jane Smith",
            email: "jane.smith@example.com",
            avatar: "/placeholder.svg?height=40&width=40"
        },
        action: "Updated Profile",
        timestamp: "15 minutes ago",
        icon: external_lucide_react_.User
    },
    {
        id: 3,
        user: {
            name: "Robert Johnson",
            email: "robert.johnson@example.com",
            avatar: "/placeholder.svg?height=40&width=40"
        },
        action: "Logout",
        timestamp: "1 hour ago",
        icon: external_lucide_react_.LogOut
    },
    {
        id: 4,
        user: {
            name: "Emily Davis",
            email: "emily.davis@example.com",
            avatar: "/placeholder.svg?height=40&width=40"
        },
        action: "Changed Settings",
        timestamp: "3 hours ago",
        icon: external_lucide_react_.Settings
    },
    {
        id: 5,
        user: {
            name: "Michael Wilson",
            email: "michael.wilson@example.com",
            avatar: "/placeholder.svg?height=40&width=40"
        },
        action: "Login",
        timestamp: "5 hours ago",
        icon: external_lucide_react_.LogIn
    }
];
const RecentActivities = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Table, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(TableHeader, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TableRow, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            children: "User"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            children: "Action"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                            children: "Time"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(TableBody, {
                children: activities.map((activity)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(TableRow, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Avatar, {
                                            className: "h-8 w-8",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(AvatarImage, {
                                                    src: activity.user.avatar,
                                                    alt: activity.user.name
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(AvatarFallback, {
                                                    children: activity.user.name.charAt(0)
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "grid gap-0.5",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "font-medium",
                                                    children: activity.user.name
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: activity.user.email
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(activity.icon, {
                                            className: "h-4 w-4 text-muted-foreground"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: activity.action
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.Clock, {
                                            className: "h-4 w-4 text-muted-foreground"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: activity.timestamp
                                        })
                                    ]
                                })
                            })
                        ]
                    }, activity.id))
            })
        ]
    });

;// CONCATENATED MODULE: ./src/components/dashboard.jsx












const Dashboard = ()=>{
    const { theme , setTheme  } = (0,theme_provider/* useTheme */.F)();
    const [searchQuery, setSearchQuery] = (0,react_.useState)("");
    const toggleTheme = ()=>{
        setTheme(theme === "dark" ? "light" : "dark");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex h-16 items-center px-4 md:px-6",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center gap-2 font-semibold text-lg",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "bg-gradient-to-r from-blue-600 to-blue-800 text-white px-2 py-1 rounded",
                                    children: "Admin"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Dashboard"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "ml-auto flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.Search, {
                                            className: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                                            type: "search",
                                            placeholder: "Search users...",
                                            className: "w-[200px] md:w-[300px] pl-8",
                                            value: searchQuery,
                                            onChange: (e)=>setSearchQuery(e.target.value)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button, {
                                    variant: "ghost",
                                    size: "icon",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.BellRing, {
                                            className: "h-5 w-5"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "sr-only",
                                            children: "Notifications"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button, {
                                    variant: "ghost",
                                    size: "icon",
                                    onClick: toggleTheme,
                                    children: [
                                        theme === "dark" ? /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.Sun, {
                                            className: "h-5 w-5"
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.Moon, {
                                            className: "h-5 w-5"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "sr-only",
                                            children: "Toggle theme"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DropdownMenu, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(DropdownMenuTrigger, {
                                            asChild: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                                                variant: "ghost",
                                                size: "icon",
                                                className: "rounded-full",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/placeholder.svg?height=32&width=32",
                                                    alt: "Avatar",
                                                    className: "rounded-full border h-8 w-8"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DropdownMenuContent, {
                                            align: "end",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DropdownMenuItem, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.User, {
                                                            className: "mr-2 h-4 w-4"
                                                        }),
                                                        "Profile"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DropdownMenuItem, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.Settings, {
                                                            className: "mr-2 h-4 w-4"
                                                        }),
                                                        "Settings"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DropdownMenuItem, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.LogOut, {
                                                            className: "mr-2 h-4 w-4"
                                                        }),
                                                        "Logout"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "container mx-auto p-4 md:p-6 space-y-6",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-2xl font-bold tracking-tight",
                                children: "Dashboard"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex items-center gap-2",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DropdownMenu, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(DropdownMenuTrigger, {
                                            asChild: true,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button, {
                                                variant: "outline",
                                                size: "sm",
                                                children: [
                                                    "Last 7 days ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.ChevronDown, {
                                                        className: "ml-2 h-4 w-4"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DropdownMenuContent, {
                                            align: "end",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(DropdownMenuItem, {
                                                    children: "Last 24 hours"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(DropdownMenuItem, {
                                                    children: "Last 7 days"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(DropdownMenuItem, {
                                                    children: "Last 30 days"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(DropdownMenuItem, {
                                                    children: "Last 3 months"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(DropdownMenuItem, {
                                                    children: "Last year"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(DropdownMenuItem, {
                                                    children: "All time"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(UserStats, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Tabs, {
                        defaultValue: "users",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TabsList, {
                                className: "bg-secondary",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(TabsTrigger, {
                                        value: "users",
                                        children: "Users"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(TabsTrigger, {
                                        value: "activities",
                                        children: "Recent Activities"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TabsContent, {
                                value: "users",
                                className: "space-y-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(CardTitle, {
                                                    children: "User Management"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(CardDescription, {
                                                    children: "View and manage all registered users in the system."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(CardContent, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(UserList, {
                                                searchQuery: searchQuery
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TabsContent, {
                                value: "activities",
                                className: "space-y-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(CardTitle, {
                                                    children: "Recent Activities"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(CardDescription, {
                                                    children: "Monitor recent user activities and logins."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(CardContent, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(RecentActivities, {})
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ })

};
;