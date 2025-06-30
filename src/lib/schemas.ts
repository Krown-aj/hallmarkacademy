import { z } from "zod";
import { Terms } from "@/generated/prisma";

/**
 * SUBJECT
 */
export const subjectSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(1, { message: "Subject name is required!" }),
    category: z.string().min(1, { message: "Category is required!" }),
    schoolid: z.string().min(1, { message: "Subject's school is required!" }),
    teachers: z.array(z.string()).optional() // teacher IDs
});
export type SubjectSchema = z.infer<typeof subjectSchema>;

/**
 * CLASS
 */
export const classSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(1, { message: "Class name is required!" }),
    category: z.string().min(1, { message: "Category is required!" }),
    level: z.string().min(1, { message: "Level is required!" }),
    capacity: z.coerce.number().int().min(1).optional(),
    formmasterid: z.string().optional(),
});
export type ClassSchema = z.infer<typeof classSchema>;

export const termSchema = z.object({
    id: z.string().optional(),
    session: z.string().min(1, { message: "Term session is required!" }),
    term: z.nativeEnum(Terms, {
        errorMap: () => ({ message: "Invalid term value provided!" }),
    }),
    start: z.coerce
        .date({ invalid_type_error: "Term start date is required!" }),
    end: z.coerce
        .date({ invalid_type_error: "Term end date is required!" }),
    nextterm: z.coerce
        .date({ invalid_type_error: "Beginning of next term is required!" }),
    daysopen: z.number().optional(),
    status: z.enum(['Active', 'Inactive']).optional(),
});
export type TermSchema = z.infer<typeof termSchema>;

/**
 * School
 */
export const schoolSchema = z.object({
    id: z.string().cuid().optional(),
    name: z.string().min(1, { message: "School name is required!" }),
    subtitle: z.string().optional(),
    schooltype: z.string().min(1, { message: "School type is required!" }),
    email: z
        .string()
        .email({ message: "Invalid email address!" })
        .min(1, { message: "Email is required!" }),
    phone: z.string().min(1, { message: "Phone number is required!" }).optional(),
    address: z.string().min(1, { message: "Address is required!" }),
    contactperson: z.string().optional(),
    contactpersonphone: z.string().optional(),
    contactpersonemail: z.string().email().optional(),
    youtube: z.string().optional(),
    facebook: z.string().optional(),
    regnumbercount: z.number().int().optional(),
    regnumberappend: z.string().optional(),
    regnumberprepend: z.string().optional(),
    logo: z.string().optional(),
});
export type SchoolSchema = z.infer<typeof schoolSchema>;

/**
 * TEACHER
 */
export const teacherSchema = z.object({
    id: z.string().optional(),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long!" })
        .optional()
        .or(z.literal("")),
    title: z.string().min(1, { message: "Title is required!" }),
    firstname: z.string().min(1, { message: "First name is required!" }),
    surname: z.string().min(1, { message: "Last name is required!" }),
    othername: z.string().optional(),
    birthday: z.coerce.date({ message: "Birthday is required!" }),
    bloodgroup: z.string().min(1, { message: "Blood group is required!" }),
    sex: z.enum(["MALE", "FEMALE"], { message: "Sex is required!" }),
    state: z.string().min(1, { message: "State is required!" }),
    lga: z.string().min(1, { message: "LGA is required!" }),
    email: z.string().email({ message: "Invalid email address!" }).min(1, { message: "Email is required!" }),
    phone: z.string().min(1, { message: "Phone number is required!" }),
    address: z.string().min(1, { message: "Address is required!" }),
    avarta: z.string().optional(),
    schoolid: z.string().min(1, { message: "Teacher's school is required!" }),
    subjects: z.array(z.string()).optional(),
    classes: z.array(z.string()).optional(),
});
export type TeacherSchema = z.infer<typeof teacherSchema>;

/**
 * STUDENT
 */
export const studentSchema = z.object({
    id: z.string().optional(),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long!" })
        .optional()
        .or(z.literal("")),
    admissionnumber: z.string().min(1, { message: "Admission number is required!" }),
    firstname: z.string().min(1, { message: "First name is required!" }),
    surname: z.string().min(1, { message: "Last name is required!" }),
    othername: z.string().optional(),
    birthday: z.coerce.date({ message: "Birthday is required!" }),
    gender: z.enum(["MALE", "FEMALE"], { message: "Gender is required!" }),
    religion: z.string().optional(),
    studenttype: z.string().min(1, { message: "Student type is required!" }),
    house: z.string().min(1, { message: "House is required!" }),
    bloodgroup: z.string().min(1, { message: "Blood group is required!" }),
    admissiondate: z.coerce.date().optional(),
    email: z.string().email({ message: "Invalid email address!" }).min(1, { message: "Email is required!" }),
    phone: z.string().min(1, { message: "Phone number is required!" }),
    address: z.string().min(1, { message: "Address is required!" }),
    state: z.string().min(1, { message: "State is required!" }),
    lga: z.string().min(1, { message: "LGA is required!" }),
    avarta: z.string().optional(),
    parentid: z.string().min(1, { message: "Student's parent is required!" }),
    schoolid: z.string().min(1, { message: "Student's school is required!" }),
    classid: z.string().min(1, { message: "Student's class is required!" }),
});
export type StudentSchema = z.infer<typeof studentSchema>;

/**
 * TEST
 */
export const testSchema = z.object({
    id: z.string().optional(),
    title: z.string().min(1, { message: "Test title is required!" }),
    status: z.enum(["Completed", "Cancelled", "Pending"], { message: "Status is required!" }),
    instructions: z.string().optional(),
    duration: z.coerce.number().int().min(1, { message: "Duration is required!" }),
    maxscore: z.coerce.number().int().min(1, { message: "Max score is required!" }),
    open: z.boolean({ required_error: "Open/closed flag is required!" }),
    testdate: z.coerce.date({ message: "Test date is required!" }),
    testtime: z.coerce.date({ message: "Test time is required!" }),
    term: z.enum(["First", "Second", "Third"], { message: "Term is required!" }),
    subjectid: z.string().min(1, { message: "Test's subject is required!" }),
    teacherid: z.string().min(1, { message: "Test's teacher is required!" }),
});
export type TestSchema = z.infer<typeof testSchema>;