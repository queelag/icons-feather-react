import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherLockElement } from '@aracna/icons-feather-web/elements/lock-element'

export const IconFeatherLock: ElementComponent<IconFeatherLockElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherLockElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-lock', IconFeatherLockElement)
