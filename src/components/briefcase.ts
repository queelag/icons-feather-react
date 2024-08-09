import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherBriefcaseElement } from '@aracna/icons-feather-web/elements/briefcase-element'

export const IconFeatherBriefcase: ElementComponent<IconFeatherBriefcaseElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherBriefcaseElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-briefcase', IconFeatherBriefcaseElement)
