import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherBriefcaseElement } from '@aracna/icons-feather-web/elements/briefcase-element'

export const IconFeatherBriefcase: ElementComponent<IconFeatherBriefcaseElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherBriefcaseElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-briefcase', IconFeatherBriefcaseElement)
