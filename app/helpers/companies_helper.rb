module CompaniesHelper
    def imagefor(company)
        if company.logo.present?
            company.logo
        else
            "http://unspun.agency/media/W1siZmYiLCJhcHAvYXNzZXRzL2ltYWdlcy9hZ2VuY2llcy9sb2dvX21pc3NpbmcucG5nIl0sWyJwIiwidGh1bWIiLCIyMzh4MjM4Il1d/logo_missing.png?sha=4397272d0dcda2cc"
        end
    end
    
end
