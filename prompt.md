# Image Factory Platform Requirements

## Project Overview
Create an enterprise-grade platform for managing AWS image construction and deployment using Next.js 14, Tailwind CSS, and shadcn/ui. The platform serves both internal teams and clients, providing comprehensive image management capabilities.

## Core Features

### 1. Image Management
- Display list of latest images by OS family
- Filter and search capabilities
- Status tracking for each image
- Quick actions for building and deployment

### 2. KPI Dashboard
- Visual representation of key metrics
- Image distribution by OS family
- Build success rates
- Resource utilization statistics
- Activity trends over time

### 3. Data Source Templates
- Standardized templates for data insertion
- Template management interface
- Schema validation
- Version control for templates

### 4. Job Management
- Trigger GitLab pipeline jobs
- Schedule and monitor builds
- Production deployment planning
- Job status tracking

### 5. EC2 Instance Management
- Create EC2 instances for testing
- Integration with ImageFactory repository
- Instance configuration options
- Test environment setup

### 6. Image Building
- Form-based image creation
- Configurable build options:
  - Security hardening
  - Monitoring tools
  - Custom scripts
- Version management
- Automated build triggers

### 7. Production Deployment
- Schedule image provisioning
- Production deployment workflow
- Image sharing process management
- Deployment validation

### 8. Client Features
- Self-service image building
- Custom image requests
- AMI version queries
- Chatbot support system

## Technical Requirements

### Frontend Framework
- Next.js 14
- React Server Components
- Client-side interactivity where needed

### Styling
- Tailwind CSS for styling
- shadcn/ui component library
- Responsive design
- Dark/light mode support

### UI Components
1. Dashboard
   - KPI cards
   - Charts and graphs
   - Activity feeds
   - Status indicators

2. Image Management
   - Filterable tables
   - Search functionality
   - Action buttons
   - Status badges

3. Builder Interface
   - Form validation
   - OS family selection
   - Version control
   - Configuration options

4. Scheduler
   - Calendar interface
   - Job scheduling
   - Status tracking
   - Timeline view

5. Support System
   - Chat interface
   - Quick responses
   - Status updates
   - Request tracking

### Data Visualization
- Charts for metrics
- OS distribution graphs
- Build success rates
- Resource utilization

### User Experience
- Intuitive navigation
- Clear feedback
- Loading states
- Error handling
- Toast notifications

## Architecture Considerations

### Component Structure
- Modular components
- Reusable utilities
- Clear separation of concerns
- Type safety with TypeScript

### State Management
- React hooks for local state
- Form handling with react-hook-form
- Data validation with Zod
- Real-time updates

### Performance
- Optimized builds
- Lazy loading
- Efficient rendering
- Caching strategies

### Security
- Input validation
- Safe data handling
- Access control
- Secure API integration

## Design Guidelines

### Visual Style
- Clean, professional interface
- Consistent color scheme
- Clear typography
- Meaningful icons
- Visual hierarchy

### Layout
- Responsive grid system
- Flexible components
- Mobile-friendly design
- Accessible interface

### Interactive Elements
- Hover states
- Loading indicators
- Transition effects
- Feedback animations

## Implementation Notes

### Code Quality
- TypeScript for type safety
- ESLint for code quality
- Prettier for formatting
- Component documentation

### Testing
- Unit tests for utilities
- Component testing
- Integration testing
- E2E testing considerations

### Documentation
- Code comments
- API documentation
- Usage examples
- Setup instructions

### Deployment
- Build optimization
- Environment configuration
- Deployment scripts
- Monitoring setup