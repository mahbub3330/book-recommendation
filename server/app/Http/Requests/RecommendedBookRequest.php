<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\Rule;

class RecommendedBookRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        $user_id = $this->request->get('user_id');
        return [
            'user_id' => 'required',
            'book_id' => ['required', Rule::unique('recommended_books')->where(function ($query) use ($user_id) {
                return $query->where('user_id', $user_id);
            })],
        ];
    }

    /**
     * Get the validation messages that apply to the request.
     * @return array
     */
    public function messages(): array
    {
        return [
            'user_id.required' => 'You must have to enter an user',
            'book_id.recommended_books' => 'This book is Already attached with the user',
            'book_id.required' => 'A valid Recommended Book is required'
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'success'   => false,
            'message'   => 'Validation errors',
            'data'      => $validator->errors()
        ]));
    }
}
