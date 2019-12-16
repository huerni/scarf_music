package com.cgsx.scarf_music.service;

import org.springframework.security.core.Authentication;

public interface AuthenticationService {
    Authentication getAuthentication();
}
