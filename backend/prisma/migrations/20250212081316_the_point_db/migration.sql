-- CreateTable
CREATE TABLE "appointment_status" (
    "appointment_status_id" BIGSERIAL NOT NULL,
    "appointment_status" VARCHAR(11),

    CONSTRAINT "appointment_status_pkey" PRIMARY KEY ("appointment_status_id")
);

-- CreateTable
CREATE TABLE "appointments" (
    "appoint_id" BIGSERIAL NOT NULL,
    "preferred_time" TIME(6),
    "preferred_date" DATE,
    "staff_id" BIGINT,
    "appointment_status_id" BIGINT,
    "final_date" DATE,
    "final_time" TIME(6),
    "user_id" BIGINT,

    CONSTRAINT "appointments_pkey" PRIMARY KEY ("appoint_id")
);

-- CreateTable
CREATE TABLE "clinic_staff" (
    "staff_id" BIGSERIAL NOT NULL,
    "staff_name" VARCHAR(50),
    "staff_birthdate" DATE,

    CONSTRAINT "clinic_staff_pkey" PRIMARY KEY ("staff_id")
);

-- CreateTable
CREATE TABLE "clinic_staff_details" (
    "clinic_staff_contact_id" BIGSERIAL NOT NULL,
    "staff_id" BIGINT NOT NULL,
    "staff_contact" VARCHAR(50),
    "staff_address" VARCHAR(100),

    CONSTRAINT "clinic_staff_details_pkey" PRIMARY KEY ("clinic_staff_contact_id")
);

-- CreateTable
CREATE TABLE "guardian" (
    "guardian_id" BIGSERIAL NOT NULL,
    "patient_details_id" BIGINT NOT NULL,
    "guardian_name" VARCHAR(50),
    "guardian_contact" VARCHAR(11),

    CONSTRAINT "guardian_pkey" PRIMARY KEY ("guardian_id")
);

-- CreateTable
CREATE TABLE "mode_of_payment" (
    "mode_of_payment_id" BIGSERIAL NOT NULL,
    "mode_of_payment" VARCHAR(30),

    CONSTRAINT "mode_of_payment_pkey" PRIMARY KEY ("mode_of_payment_id")
);

-- CreateTable
CREATE TABLE "patient_appointments" (
    "patient_appointments_id" BIGSERIAL NOT NULL,
    "patient_id" BIGINT NOT NULL,
    "appoint_id" BIGINT NOT NULL,
    "booking_date" DATE,

    CONSTRAINT "patient_appointments_pkey" PRIMARY KEY ("patient_appointments_id")
);

-- CreateTable
CREATE TABLE "patient_conditions" (
    "patient_conditions_id" BIGSERIAL NOT NULL,
    "condition_type" VARCHAR(50),
    "condition_description" VARCHAR(100),

    CONSTRAINT "patient_conditions_pkey" PRIMARY KEY ("patient_conditions_id")
);

-- CreateTable
CREATE TABLE "patient_details" (
    "patient_details_id" BIGSERIAL NOT NULL,
    "patient_id" BIGINT NOT NULL,
    "patient_conditions_id" BIGINT NOT NULL,
    "patient_birth_date" DATE,

    CONSTRAINT "patient_details_pkey" PRIMARY KEY ("patient_details_id")
);

-- CreateTable
CREATE TABLE "patients" (
    "patient_id" BIGSERIAL NOT NULL,
    "patient_name" VARCHAR(100),
    "user_id" BIGINT NOT NULL,

    CONSTRAINT "patients_pkey" PRIMARY KEY ("patient_id")
);

-- CreateTable
CREATE TABLE "payment" (
    "payment_id" BIGSERIAL NOT NULL,
    "appoint_id" BIGINT NOT NULL,
    "user_id" BIGINT NOT NULL,
    "payment_status" VARCHAR(30),

    CONSTRAINT "payment_pkey" PRIMARY KEY ("payment_id")
);

-- CreateTable
CREATE TABLE "recurrence" (
    "recurrence_id" BIGSERIAL NOT NULL,
    "recurrence_type" VARCHAR(30),
    "interval" VARCHAR(50),
    "start_date" DATE,
    "end_date" DATE,
    "occurence_count" BIGINT,
    "time" TIME(6),

    CONSTRAINT "recurrence_pkey" PRIMARY KEY ("recurrence_id")
);

-- CreateTable
CREATE TABLE "recurring_instances" (
    "instance_id" BIGSERIAL NOT NULL,
    "appoint_id" BIGINT NOT NULL,
    "recurrence_id" BIGINT NOT NULL,
    "appoint_date" DATE,
    "appoint_time" TIME(6),
    "instance_status" VARCHAR(30),

    CONSTRAINT "recurring_instances_pkey" PRIMARY KEY ("instance_id")
);

-- CreateTable
CREATE TABLE "session" (
    "session_id" BIGSERIAL NOT NULL,
    "patient_id" BIGINT NOT NULL,
    "staff_id" BIGINT NOT NULL,
    "appoint_id" BIGINT NOT NULL,

    CONSTRAINT "session_pkey" PRIMARY KEY ("session_id")
);

-- CreateTable
CREATE TABLE "session_details" (
    "session_details_id" BIGSERIAL NOT NULL,
    "session_id" BIGINT NOT NULL,
    "session_description" VARCHAR(100),
    "session_date" DATE,
    "session_time" TIME(6),
    "session_document" BYTEA,

    CONSTRAINT "session_details_pkey" PRIMARY KEY ("session_details_id")
);

-- CreateTable
CREATE TABLE "staff_role" (
    "staff_role_id" BIGSERIAL NOT NULL,
    "staff_id" BIGINT NOT NULL,
    "staff_role" VARCHAR(50),

    CONSTRAINT "staff_role_pkey" PRIMARY KEY ("staff_role_id")
);

-- CreateTable
CREATE TABLE "type_of_payment" (
    "type_of_payment_id" BIGSERIAL NOT NULL,
    "type_of_payment" VARCHAR(30),

    CONSTRAINT "type_of_payment_pkey" PRIMARY KEY ("type_of_payment_id")
);

-- CreateTable
CREATE TABLE "user_contacts" (
    "user_contact_id" BIGSERIAL NOT NULL,
    "user_id" BIGINT NOT NULL,
    "user_email" VARCHAR(50),
    "user_contact_number" VARCHAR(11),

    CONSTRAINT "user_contacts_pkey" PRIMARY KEY ("user_contact_id")
);

-- CreateTable
CREATE TABLE "users" (
    "user_id" BIGSERIAL NOT NULL,
    "user_full_name" VARCHAR(50),
    "user_password" VARCHAR(50),
    "username" VARCHAR(50),

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- AddForeignKey
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_appointment_status_id_fkey" FOREIGN KEY ("appointment_status_id") REFERENCES "appointment_status"("appointment_status_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "clinic_staff"("staff_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clinic_staff_details" ADD CONSTRAINT "clinic_staff_details_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "clinic_staff"("staff_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "patient_appointments" ADD CONSTRAINT "patient_appointments_appoint_id_fkey" FOREIGN KEY ("appoint_id") REFERENCES "appointments"("appoint_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "patient_appointments" ADD CONSTRAINT "patient_appointments_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patients"("patient_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "patient_conditions" ADD CONSTRAINT "patient_conditions_patient_conditions_id_fkey" FOREIGN KEY ("patient_conditions_id") REFERENCES "patient_conditions"("patient_conditions_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "patient_details" ADD CONSTRAINT "patient_details_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patients"("patient_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "patients" ADD CONSTRAINT "patients_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "recurring_instances" ADD CONSTRAINT "recurring_instances_appoint_id_fkey" FOREIGN KEY ("appoint_id") REFERENCES "appointments"("appoint_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "recurring_instances" ADD CONSTRAINT "recurring_instances_recurrence_id_fkey" FOREIGN KEY ("recurrence_id") REFERENCES "recurrence"("recurrence_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "session" ADD CONSTRAINT "session_appoint_id_fkey" FOREIGN KEY ("appoint_id") REFERENCES "appointments"("appoint_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "session" ADD CONSTRAINT "session_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patients"("patient_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "session" ADD CONSTRAINT "session_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "clinic_staff"("staff_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "session_details" ADD CONSTRAINT "session_details_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "session"("session_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "staff_role" ADD CONSTRAINT "staff_role_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "clinic_staff"("staff_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_contacts" ADD CONSTRAINT "user_contacts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
