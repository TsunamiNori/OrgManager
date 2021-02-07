// Copyright �2020 Jacobs Data Solutions

// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the
// License at

// http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
// CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
using JDS.OrgManager.Domain.Abstractions.Models;
using JDS.OrgManager.Domain.Models;
using System;
using System.Collections.Generic;

namespace JDS.OrgManager.Domain.Common.Addresses
{
    public record Address(string Street1, string City, State State, ZipCode ZipCode, string? Street2 = default) : IValueObject
    {
        public override string ToString()
        {
            var apt = !string.IsNullOrWhiteSpace(Street2) ? " " + Street2 : "";
            return $"{Street1}{apt}, {City}, {State} {ZipCode}";
        }
    }
}