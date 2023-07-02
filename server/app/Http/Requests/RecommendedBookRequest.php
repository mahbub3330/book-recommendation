<?php

namespace App\Http\Requests;

use App\Models\User;
use App\Rules\RecommendedBookUserRule;
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
        $user = User::query()->where('email', $this->request->get('email'))->first();
        $userId = $user['id'] ?? null;
        return [
            'email' => ['required', new RecommendedBookUserRule()],
            'book_id' => ['required', Rule::unique('recommended_books')->where(function ($query) use ($userId) {
                return $query->where('user_id', $userId);
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
            'email.required' => 'You must have to enter a user email.',
            'book_id.recommended_books' => 'This book is Already attached with the user',
            'book_id.required' => 'A valid Recommended Book is required'
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'success' => false,
            'message' => 'Validation errors',
            'data' => $validator->errors()
        ]));
    }
}
